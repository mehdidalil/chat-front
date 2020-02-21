import React from 'react';
import Form from './Form';
import { UserApi } from '../../api';
import { connect } from 'react-redux';
import { authUser } from '../../actions';

const inputs = {
	mail: "",
	password: "",
};

const labels = {
	mail: "Mail",
	password: "Password",
};

const types = {
	mail: "text",
	password: "password",
};

const submit = (form) => {
	const { mail, password } = form;

	return UserApi.post("/login", { mail, password });
};

const popups = {
	ok: setPopup => ({
		message: "User successfully logged ! !",
		buttons: [
			{ label: "OK", path: "/chat" },
			{ label: "Go To Profile", path: "/profile" },
		],
	})
};

const Login = (props) => {
	return (
		<Form
			title="Login"
			inputs={inputs}
			labels={labels}
			types={types}
			submit={submit}
			popups={popups}
			action={props.authUser}
		/>
	);
};

export default connect(null, { authUser })(Login);