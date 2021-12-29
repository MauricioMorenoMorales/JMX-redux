import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
	reset,
	restar,
	restar5,
	sumar,
	sumar5,
} from '../actions/contador.actions';

const Contador = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Contador con Redux</h2>
			<nav>
				<button onClick={() => dispatch(sumar5())}>+5</button>
				<button onClick={() => dispatch(sumar())}>+1</button>
				<button onClick={() => dispatch(reset())}>0</button>
				<button onClick={() => dispatch(restar())}>-1</button>
				<button onClick={() => dispatch(restar5())}>-5</button>
			</nav>
			<h3>{state.contador}</h3>
		</div>
	);
};

export default Contador;
