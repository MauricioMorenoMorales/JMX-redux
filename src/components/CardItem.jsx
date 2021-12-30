import React from 'react';

const CardItem = ({ data, deleteFromCart }) => {
	const { id, name, price, quantity } = data;
	return (
		<div style={{ borderBottom: 'thin solid gray' }}>
			<h4>{name}</h4>
			<h5>
				${price}.00 x {quantity} = ${price * quantity}.00
			</h5>
			<button onClick={() => deleteFromCart(id)}>Eliminar</button>
			<br />
			<button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
			<br />
			<br />
		</div>
	);
};

export default CardItem;
