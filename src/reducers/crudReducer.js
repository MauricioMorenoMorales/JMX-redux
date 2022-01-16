import {
	CREATE_DATA,
	DELETE_DATA,
	NO_DATA,
	READ_ALL_DATA,
	UPDATE_DATA,
} from '../types';

export const initialState = {
	db: [],
};

export const crudReducer = function (state = initialState, action) {
	switch (action.type) {
		case READ_ALL_DATA: {
			return {
				...state,
				db: action.payload.map(data => data),
			};
		}
		case CREATE_DATA: {
			return {
				...state,
				db: [...state.db, action.payload],
			};
		}
		case UPDATE_DATA: {
			let newData = state.db.map(element =>
				element.id === action.payload.id ? action.payload : element,
			);
			return {
				...state,
				db: newData,
			};
		}
		case DELETE_DATA: {
			const newData = state.db.filter(element => element.id !== action.payload);
			return {
				...state,
				db: newData,
			};
		}
		case NO_DATA: {
			return initialState;
		}
		default:
			return initialState;
	}
};
