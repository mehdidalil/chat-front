import React from 'react';
import View from './View';
import { Create } from '../account';

const CreateView = (props) => {
	return (
		<View component={Create} unlogged redirect="/chat" />
	);
};

export default CreateView;