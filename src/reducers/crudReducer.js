import { TYPES } from '../actions/crudActions';

export const crudInitialState = {
	db: null,
};

export const crudReducer = function (state, action) {
	switch (action.type) {
		case TYPES.READ_ALL_DATA: {
			return {
				...state,
				db: action.payload.map(data => data),
			};
		}
		case TYPES.CREATE_DATA: {
			return {
				...state,
				db: [...state.db, action.payload],
			};
		}
		case TYPES.UPDATE_DATA: {
			let newData = state.db.map(element =>
				element.id === action.payload.id ? action.payload : element,
			);
			return {
				...state,
				db: newData,
			};
		}
		case TYPES.DELETE_DATA: {
			const newData = state.db.filter(element => element.id !== action.payload);
			return {
				...state,
				db: newData,
			};
		}
		case TYPES.NO_DATA: {
			return crudInitialState;
		}
		case TYPES.READ_ALL_DATA:
			return crudInitialState;
		default:
			break;
	}
};
