import React, { useEffect, useState } from 'react';
import Button from '../Button';
import SocialMediaAuthContainer from './SocialMediaAuthContainer';
import { Link, useHistory } from 'react-router-dom';
import { sendUser } from '../../store';
import { LOGIN_ROUTE } from '../../utils/http';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../InputField';
import ErrorMessage from '../ErrorMessage';
import Container from '../Container';

function LogInContainer() {
	const [input, setInput] = useState({ email: '', password: '' });
	const dispatch = useDispatch();
	const history = useHistory();
	const { isLoading, user, error } = useSelector((state) => state.user);

	useEffect(() => {
		if (user?.username) {
			history.replace('/');
		}
	}, [user]);

	const handleInputChange = (e) =>
		setInput((input) => ({ ...input, [e.target.name]: e.target.value }));

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (input.email && input.password) {
			dispatch(sendUser(input, LOGIN_ROUTE));
		}
	};

	if (isLoading) return <h1 style={{ textAlign: 'center' }}>...LOADING</h1>;

	return (
		<Container>
			<div className='wrapper'>
				{error && <ErrorMessage />}
				<form className='form ' onSubmit={handleFormSubmit}>
					<h1 className='form__title form__field'>Log In</h1>
					<InputField
						label='Email'
						type='email'
						name='email'
						onChange={handleInputChange}
						value={input.email}
					/>
					<InputField
						label='Password'
						type='password'
						name='password'
						onChange={handleInputChange}
						value={input.password}
					/>
					<Button className='btn btn--form' type='submit'>
						Log in
					</Button>
					<p className='form__text'>or</p>
					<SocialMediaAuthContainer />
				</form>
				<p>*this is different, this is for those who has account</p>
				<p>
					if you dont, then <Link to='/signup'>go create account first</Link>
				</p>
			</div>
		</Container>
	);
}

export default LogInContainer;
