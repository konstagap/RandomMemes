import {
	FETCH_USER,
	USER_FAILURE,
	USER_SUCCSESS,
	USER_LOGOUT
} from './userTypes';

const intialState = {
	error: null,
	isLoading: false,
	user: null
};

export const userReducer = (state = intialState, action) => {
	switch (action.type) {
		case FETCH_USER: {
			return { ...state, isLoading: true, error: null };
		}
		case USER_FAILURE: {
			return { ...state, isLoading: false, error: action.payload };
		}
		case USER_SUCCSESS: {
			return { ...state, isLoading: false, user: action.payload };
		}
		case USER_LOGOUT: {
			return {
				...state,
				user: {},
				isLoading: false
			};
		}
		default:
			return state;
	}
};
