import React from 'react';
import FormInput from './FormInput';

const AccountForm = (props) => {
	return (
		<form noValidate autoComplete="off">
			{props.inputs.map(input => (
				<FormInput
					key={input.id}
					id={input.id}
					label={input.label}
					type={input.type ? input.type : "text"}
					error={input.error}
					inputHandler={props.inputHandler}
				/>
			))}
		</form>
	)
};

export default AccountForm;