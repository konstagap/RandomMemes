import React from 'react';
import Header from '../Header';
import MemesButton from '../MemesButton';
import Container from '../Container';
import MemesCard from '../MemesCard';
import { useSelector } from 'react-redux';

function MemesContainer({ user }) {
	const { memes, isLoading, error, currentMemeIndex } = useSelector(
		(state) => state.memes
	);
	console.log('memes :>> ', memes.length);
	return (
		<Container>
			<Header user={user} />
			{error.mymessage && (
				<p className='service-message service-message--error'>
					{error.mymessage}
				</p>
			)}
			{isLoading && <p className='service-message'>...loading memes</p>}
			{memes[0] && <MemesCard meme={memes[currentMemeIndex]} />}
			<MemesButton
				error={error}
				isLoading={isLoading}
				isInitial={memes[0] && error ? false : true}
			/>
		</Container>
	);
}

export default MemesContainer;
