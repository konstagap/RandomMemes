import React from 'react';
import memeface from '../images/memeface.jpg';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../store';

export default function Header({ user }) {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logOutUser());
	};

	return (
		<header className='header'>
			<div className='header__info'>
				<img
					className='header__img'
					src={user.picture || memeface}
					alt='User'
				/>
				<h1 className='header__title'>
					Hello {user.username}, enjoy your random memes
				</h1>
			</div>

			<Button onClick={handleLogOut} className='btn btn--logout'>
				log out
			</Button>
		</header>
	);
}
