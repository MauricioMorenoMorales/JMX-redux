import React, { useReducer } from 'react';
import { TYPES } from '../actions/shoppingActions';
import {
	shoppingInitialState,
	shoppingReducer,
} from '../reducers/shoppingReducer';
import CardItem from './CardItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
	const { products, cart } = state;

	const addToCart = id => {
		dispatch({ type: TYPES.ADD_TO_CART, payload: id });
	};
	const deleteFromCart = (id, all = false) =>
		all
			? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
			: dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });

	const clearCart = $ => dispatch({ type: TYPES.CLEAR_CART });

	return (
		<div>
			<h2>carrito de compras</h2>
			<h3>Productos</h3>
			<article className="box grid-responsive">
				{products.map(product => (
					<ProductItem key={product.id} data={product} addToCart={addToCart} />
				))}
			</article>
			<h3>Carrito</h3>
			<article className="box">
				<button onClick={clearCart}>Limiar Carrito</button>
				{cart.map((item, index) => (
					<CardItem key={index} data={item} deleteFromCart={deleteFromCart} />
				))}
			</article>
		</div>
	);
};

export default ShoppingCart;
