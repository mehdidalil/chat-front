import React from 'react';
import AccountCard from './AccountCard';
import { create } from './utils';

const inputs = [
	{
		id: "username",
		label: "Username",
	},
	{
		id: "mail",
		label: "Mail",
	},
	{
		id: "password",
		label: "Password",
		type: "password"
	},
	{
		id: "passwordConfirm",
		label: "Please confirm password",
		type: "password"
	},
];

const buttons = [
	{
		id: "create",
		text: "Create",
		onClick: create,
	},
]

const Create = (props) => {
	return (
		<AccountCard
			header={{
				title: "Create",
			}}
			inputs={inputs}
			buttons={buttons}
		/>
	);
};

export default Create;