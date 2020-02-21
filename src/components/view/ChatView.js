import React from 'react';
import View from './View';
import { Chat } from '../chat';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions';

const ChatView = (props) => {
	return (
		<View component={Chat} />
	);
};

export default ChatView;