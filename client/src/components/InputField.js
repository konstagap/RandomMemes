import React from 'react';

function InputField({ label, type = 'text', onChange = null, value = '' }) {
	return (
		<div className='form__field'>
			<label className='form__label' htmlFor={type}>
				{label}
			</label>
			<input
				onChange={onChange}
				value={value}
				className='form__input'
				type={type}
				name={type}
				id={type}
			/>
		</div>
	);
}

export default InputField;
