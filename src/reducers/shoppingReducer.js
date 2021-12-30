import {
	ADD_TO_CART,
	CLEAR_CART,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
} from '../types';

export const initialState = {
	products: [
		{ id: 1, name: 'Prducto 1', price: 200 },
		{ id: 2, name: 'Prducto 2', price: 300 },
		{ id: 3, name: 'Prducto 3', price: 400 },
		{ id: 4, name: 'Prducto 4', price: 500 },
		{ id: 5, name: 'Prducto 5', price: 600 },
		{ id: 6, name: 'Prducto 6', price: 700 },
		{ id: 7, name: 'Prducto 7', price: 800 },
	],
	cart: [],
};

export const shoppingReducer = function (state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			const newItem = state.products.find(
				product => product.id === action.payload,
			);
			const itemInCart = state.cart.find(item => item.id === newItem.id);
			// prettier-ignore
			return itemInCart
				? {
						...state,
						cart: state.cart.map(item =>
							item.id === newItem.id
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					}
				: {
						...state,
						cart: [...state.cart, { ...newItem, quantity: 1 }],
					};
		}

		case REMOVE_ONE_FROM_CART: {
			const itemToDelete = state.cart.find(item => item.id === action.payload);
			// prettier-ignore
			return itemToDelete.quantity > 1
				? {
						...state,
						cart: state.cart.map(item =>
							item.id === action.payload
								? { ...item, quantity: item.quantity - 1 }
								: item,
						),
					}
				: {
						...state,
						cart: state.cart.filter(item => item.id !== action.payload),
					};
		}

		case REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			};
		}

		case CLEAR_CART:
			return initialState;

		default:
			return state;
	}
};
