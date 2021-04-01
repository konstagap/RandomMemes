import {
	FETCH_USER,
	USER_FAILURE,
	USER_SUCCSESS,
	USER_LOGOUT
} from './userTypes';
import { requestUser, initialUser, logout } from '../../utils/http';

const fetchUser = () => ({ type: FETCH_USER });

const userFailure = (err) => ({ type: USER_FAILURE, payload: err });

const userSuccsess = (user) => ({
	type: USER_SUCCSESS,
	payload: user
});

const userLogOut = () => ({ type: USER_LOGOUT });

export const sendUser = (user, route) => {
	return async (dispatch, getState) => {
		dispatch(fetchUser());
		try {
			const dbUser = await requestUser(user, route);
			if (dbUser?.username) {
				dispatch(userSuccsess(dbUser));
			} else {
				dispatch(userFailure({ message: 'User is not found' }));
			}
		} catch (err) {
			dispatch(userFailure(err));
		}
	};
};

export const getInitialUser = () => {
	return async (dispatch, getState) => {
		dispatch(fetchUser());
		try {
			const dbUser = await initialUser();
			dispatch(userSuccsess(dbUser));
		} catch (err) {
			dispatch(userFailure(err));
		}
	};
};

export const logOutUser = () => {
	return async (dispatch, getState) => {
		dispatch(fetchUser());
		try {
			await logout();
			dispatch(userLogOut());
		} catch (err) {
			dispatch(userFailure(err));
		}
	};
};
