import React from 'react';
import AccountCard from './AccountCard';
import { login } from './utils';

const inputs = [
	{
		id: "mail",
		label: "Mail",
	},
	{
		id: "password",
		label: "Password",
		type: "password"
	},
];

const buttons = [
	{
		id: "login",
		text: "Login",
		onClick: login,
	},
]

const Login = (props) => {
	return (
		<AccountCard
			header={{
				title: "Login",
			}}
			inputs={inputs}
			buttons={buttons}
		/>
	);
};

export default Login;