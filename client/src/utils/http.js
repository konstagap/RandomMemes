export const SIGNUP_ROUTE = 'signup';
export const LOGIN_ROUTE = 'login';
export const LOGOUT_ROUTE = 'logout';

export const requestUser = async (user, route) => {
	try {
		const response = await fetch(`/api/${route}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(user) // body data type must match "Content-Type" header
		});
		const dbresponse = await response.json();
		return dbresponse;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const initialUser = async () => {
	try {
		const response = await fetch('/api', {
			credentials: 'include'
		});
		if (response.status === 404) {
			return {};
		}
		const dbresponse = await response.json();
		console.log('initialuser from http :>> ', dbresponse);
		return dbresponse;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const logout = async () => {
	try {
		await fetch(`/api/${LOGOUT_ROUTE}`, {
			credentials: 'include'
		});
	} catch (error) {
		console.log(error);
		return error;
	}
};
