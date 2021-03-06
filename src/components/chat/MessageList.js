import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import Message from './Message';
import { connect } from 'react-redux';
import { fetchMessages, fetchUsers } from '../../actions';

const useStyles = makeStyles(theme => ({
	cont: {
		background: theme.palette.grey[100],
		overflowY: "scroll",
		height: "100%",
	}
}));

const MessageList = (props) => {
	const classes = useStyles();
	let messagesEnd = null;

	React.useEffect(() => {
		props.fetchMessages();
		props.fetchUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		if (messagesEnd)
			messagesEnd.scrollIntoView();
	});
	return (
		<Paper id="message-list-container" className={classes.cont}>
			{props.messages.map(message => {
				return (
					<Message
						key={message._id}
						message={message}
					/>
			)})}
			<div
				style={{ float:"left", clear: "both" }}
				ref={(el) => { messagesEnd = el; }}
			>
			</div>
		</Paper>
	);
};

const mapStateToProps = (state) => ({
	messages: state.messages,
});

export default connect(mapStateToProps, { fetchMessages, fetchUsers })(MessageList);