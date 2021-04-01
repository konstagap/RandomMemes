import React, { useEffect } from 'react';
import './App.css';
import MemesContainer from './components/Containers/MemesContainer';
import LogInContainer from './components/Containers/LogInContainer';
import SignUpContainer from './components/Containers/SignUpContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/Containers/ProtectedRoute';
import { getInitialUser } from './store';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const { isLoading, user, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	console.log('user from app :>> ', user);
	useEffect(() => {
		console.log('i dispatching get initial user');
		dispatch(getInitialUser());
	}, []);

	if (!user || isLoading) {
		console.log('isLoading is true, I am returning ...initializing user');
		return <h1 style={{ textAlign: 'center' }}>...Initializing user</h1>;
	}

	return (
		<Router>
			<Switch>
				<Route exact path='/login' component={LogInContainer} />
				<Route exact path='/signup' component={SignUpContainer} />
				<ProtectedRoute exact path='/' user={user} component={MemesContainer} />
				<Route path='*' component={SignUpContainer} />
			</Switch>
		</Router>
	);
}

export default App;
