import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Message from './Message';
import { red } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { fetchMessages, addMessage } from '../../actions';
import socketIOClient from "socket.io-client";

const useStyles = makeStyles(theme => ({
	cont: {
		background: red[100],
		overflowY: "scroll",
		height: "80vh",
	}
}));

const MessageList = (props) => {
	const classes = useStyles();
	let messagesEnd = null;

	React.useEffect(() => {
		props.fetchMessages();
	}, []);
	
	React.useEffect(() => {
		if (messagesEnd)
			messagesEnd.scrollIntoView({ behavior: "smooth"});
	});

	return (
		<Container id="message-list-container" className={classes.cont}>
			{props.messages.map(message => (
				<Message
					key={message._id}
					message={message}
				/>
			))}
			<div
				style={{ float:"left", clear: "both" }}
				ref={(el) => { messagesEnd = el; }}
			>
			</div>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	messages: state.messages
});

export default connect(mapStateToProps, { fetchMessages, addMessage })(MessageList);