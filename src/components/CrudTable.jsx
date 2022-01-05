import React from 'react';

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
	return (
		<div>
			<h3>Tabla de Datos</h3>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Constelacion</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map(e => (
							<tr key={e.id}>
								<th>{e.name}</th>
								<th>{e.constellation}</th>
								<th>
									<button onClick={() => setDataToEdit(e)}>Editar</button>
									<button onClick={() => deleteData(e.id)}>Eliminar</button>
								</th>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="3">Sin datos</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTable;
