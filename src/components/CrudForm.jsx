import React, { useState, useEffect } from 'react';

const initialForm = {
	name: '',
	constellation: '',
	id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState(initialForm); //This data fills the form state
	//Fills the form with the information to edit when setData to edit is changed on <CrudTable />
	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = event => {
		event.preventDefault();
		if (!form.name || !form.constellation) {
			alert('Datos incompletos');
			return;
		}
		//If an id is sended from <CrudTable /> will be updated new data
		if (form.id === null) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();
	};
	const handleReset = () => {
		setForm(initialForm);
		setDataToEdit(null);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					onChange={handleChange}
					value={form.name}
				/>
				<input
					type="text"
					name="constellation"
					placeholder="constellation"
					onChange={handleChange}
					value={form.constellation}
				/>
				<input type="submit" value="Enviar" />
				<input type="reset" value="Limpiar" onClick={handleReset} />
			</form>
		</div>
	);
};

export default CrudForm;
