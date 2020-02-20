import React from 'react';
import AccountCard from './AccountCard';
import { login } from './utils';
import { connect } from 'react-redux';
import { authUser } from '../../actions';
import { Redirect } from 'react-router-dom';

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

const buttons = (authUser) => ([
	{
		id: "login",
		text: "Login",
		onClick: (form, setError) => login(form, setError, authUser),
	},
])

const Login = (props) => {
	return (
		<AccountCard
			header={{
				title: "Login",
			}}
			inputs={inputs}
			buttons={buttons(props.authUser)}
		/>
	);
};

const mapStateToProps = (state) => ({
	session: state.session
});

export default connect(mapStateToProps, { authUser })(Login);