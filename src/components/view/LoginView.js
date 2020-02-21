import React from 'react';
import View from './View';
import { Login } from '../account';

const LoginView = (props) => {
	return (
		<View component={Login} unlogged redirect="/chat" />
	);
};

export default LoginView;