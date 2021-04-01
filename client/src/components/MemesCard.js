import React from 'react';

function MemesCard({ meme }) {
	return (
		<div className='meme__box'>
			<h4 className='memes__title'>Title: {meme.title}</h4>
			<div className='memes'>
				<img className='memes__img' src={meme.url} alt={meme.title} />
			</div>
		</div>
	);
}

export default MemesCard;
