import React from 'react';
import MessageList from './MessageList';
import Send from './Send';
import { makeStyles, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import socket from '../../api/socket';

const useStyles = makeStyles(theme => ({
	cont: {
		width: "100%",
		padding: "0",
		height: "70vh",
	}
}));

const Chat = (props) => {
	const classes = useStyles();
	React.useEffect(() => {
		const newMessage = (data) => {
			props.addMessage(data);
		};
		socket.on("newMessage", newMessage);
		socket.open();
		return function cleanup() {
			socket.removeListener("newMessage", newMessage);
			socket.disconnect();
			console.log("User disconnected");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container className={classes.cont}>
			<MessageList />
			<Send />
		</Container>
	);
};

const mapStateToProps = state => ({
	session: state.session,
});

export default connect(mapStateToProps, { addMessage })(Chat);