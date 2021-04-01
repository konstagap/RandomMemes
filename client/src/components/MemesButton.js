import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { fetchMemes } from '../store';

function MemesButton({ isLoading, isInitial, error }) {
	const dispatch = useDispatch();

	const handleFetchMemes = () => {
		if (!isLoading) {
			dispatch(fetchMemes());
		}
	};

	return (
		<Button onClick={handleFetchMemes} className='btn btn--memes'>
			{error.message ? error.message : isInitial ? 'MEMES!' : 'NEXT >'}
		</Button>
	);
}

export default MemesButton;
