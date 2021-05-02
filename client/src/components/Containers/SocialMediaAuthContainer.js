import React from 'react';
import facebookIcon from '../../images/facebook.svg';
import googleIcon from '../../images/search.svg';

const SocialMediaAuthContainer = () => {
	return (
		<div className='social-media'>
			<a href='api/auth/facebook' className='social-media__auth '>
				<img src={facebookIcon} alt='Log in with facebook' />
			</a>
			<a href='api/auth/google' className='social-media__auth'>
				<img src={googleIcon} alt='Log in with Google' />
			</a>
		</div>
	);
};

export default SocialMediaAuthContainer;
