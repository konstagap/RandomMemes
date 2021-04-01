import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { Link, Redirect, useHistory } from 'react-router-dom';
import InputField from '../InputField';
import SocialMediaAuthContainer from './SocialMediaAuthContainer';
import { sendUser } from '../../store';
import { SIGNUP_ROUTE } from '../../utils/http';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../ErrorMessage';
import Container from '../Container';

function SignUpContainer() {
	const [input, setInput] = useState({ email: '', password: '' });
	const dispatch = useDispatch();
	const history = useHistory();
	const { isLoading, user, error } = useSelector((state) => state.user);

	useEffect(() => {
		if (user?.username) {
			history.push('/');
		}
	}, [user]);

	const handleInputChange = (e) =>
		setInput((input) => ({ ...input, [e.target.name]: e.target.value }));

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (input.email && input.password) {
			dispatch(sendUser(input, SIGNUP_ROUTE));
		}
	};

	if (isLoading) return <h1 style={{ textAlign: 'center' }}>...LOADING</h1>;

	return (
		<Container>
			<div className='wrapper'>
				{error && <ErrorMessage />}
				<form className='form' onSubmit={handleFormSubmit}>
					<h1 className='form__title form__field'>Sign Up</h1>
					<InputField
						label='Email'
						type='email'
						onChange={handleInputChange}
						value={input.email}
					/>
					<InputField
						label='Password'
						type='password'
						onChange={handleInputChange}
						value={input.password}
					/>
					<Button disabled={isLoading} className='btn btn--form' type='submit'>
						Create Account
					</Button>
					<p className='form__text'>or</p>
					<SocialMediaAuthContainer />
				</form>
				<p>*if you already have an existing account</p>
				<p>
					you can follow <Link to='/login'>this link to log in</Link>
				</p>
			</div>
		</Container>
	);
}

export default SignUpContainer;
