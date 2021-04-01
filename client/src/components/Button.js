import React from 'react';

function Button({
	type = 'button',
	onClick = null,
	className = '',
	children,
	...rest
}) {
	return (
		<button {...rest} type={type} onClick={onClick} className={className}>
			{children}
		</button>
	);
}

export default Button;
