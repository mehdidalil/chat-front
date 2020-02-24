import React from 'react';
import Form from './Form';
import { UserApi } from '../../api';

const inputs = {
	username: "",
	mail: "",
	password: "",
	passwordConfirm: "",
};

const labels = {
	username: "Username",
	password: "Password",
	passwordConfirm: "Confirm your password",
	mail: "Mail",
};

const types = {
	username: "text",
	password: "password",
	passwordConfirm: "password",
	mail: "text",
};

const check = (form) => {
	const { password, passwordConfirm } = form;

	if (password !== passwordConfirm)
		throw new Error(`You did'nt enter the same password !`);
};

const submit = (form) => {
	const { username, password, mail } = form;

	return UserApi.post("/", { username, password, mail });
};

const popups = {
	ok: setPopup => ({
		message: "User successfully created ! Please login now !",
		buttons: [
			{ label: "OK", path: "/login" },
		],
	})
};

const Create = (props) => {
	return (
		<Form
			title="Create"
			inputs={inputs}
			labels={labels}
			types={types}
			check={check}
			submit={submit}
			popups={popups}
		/>
	);
};

export default Create;