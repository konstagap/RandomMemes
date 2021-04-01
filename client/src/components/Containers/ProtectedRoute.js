import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
	console.log('user from protected route top:>> ', user);
	console.log('im in protected route');
	return (
		<Route
			{...rest}
			render={(props) => {
				if (user.username) {
					console.log('i found user and going to memes component');
					return <Component {...rest} {...props} user={user} />;
				} else {
					console.log('i dont have user so i am redirecting to log in');
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: {
									from: props.location
								}
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default ProtectedRoute;
