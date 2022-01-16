import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	createAction,
	deleteAction,
	noAction,
	readAllAction,
	updateAction,
} from '../actions/crudActions';
import { helpHttp } from '../helpers/helpHttp';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const { db } = state.crud;
	const [dataToEdit, setDataToEdit] = useState(null); // Is used in the <form /> and is activated on the component <crudTable />
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const api = helpHttp();
	let url = 'http://localhost:5000/santos';

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(url)
			.then(res => {
				if (!res.err) {
					dispatch(readAllAction(res));
					setError(null);
				} else {
					dispatch(noAction());
					setError(res);
				}
			});
		setLoading(false);
	}, [url, dispatch]);

	const createData = data => {
		data.id = Date.now();
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api
			.post(url, options)
			.then(fetchResponse =>
				!fetchResponse.err
					? dispatch(createAction(fetchResponse))
					: setError(fetchResponse),
			);
	};

	const updateData = data => {
		const endPoint = `${url}/${data.id}`;
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api
			.put(endPoint, options)
			.then(postResponse =>
				!postResponse.err
					? dispatch(updateAction(postResponse))
					: setError(postResponse),
			);
	};

	const deleteData = id => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro con el id? ${id}`,
		);
		if (isDelete) {
			const endPoint = `${url}/${id}`;
			const options = {
				headers: { 'content-type': 'application/json' },
			};
			api
				.del(endPoint, options)
				.then(deleteResponse =>
					!deleteResponse.err
						? dispatch(deleteAction(id))
						: setError(deleteResponse),
				);
		} else {
			return;
		}
	};

	return (
		<div>
			<br />
			<h2>CRUD API</h2>
			<article className="grid-1-2">
				<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
				{/* The crud form create and update the data */}
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				{loading && <Loader />}
				{error && (
					<Message
						message={`Error ${error.status}: ${error.statusText}`}
						backgroundColor="#dc3545"
					/>
				)}
				{/* CrudApi default function is get the data and store it in the component Crudtable */}
				{/* When they click on a button inside this component they call the two functions bellow  with the element and elemet.id*/}
				{db && (
					<CrudTable
						data={db}
						setDataToEdit={setDataToEdit}
						deleteData={deleteData}
					/>
				)}
			</article>
		</div>
	);
};

export default CrudApi;
