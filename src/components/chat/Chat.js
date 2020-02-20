import React from 'react';
import MessageList from './MessageList';
import Send from './Send';
import { makeStyles, Container } from '@material-ui/core';
import socketIOClient from 'socket.io-client';

const useStyles = makeStyles(theme => ({
	cont: {
		width: "98vw",
		height: "75vh",
	}
}));

const Chat = (props) => {
	const classes = useStyles();
	const [socket, setSocket] = React.useState(socketIOClient("http://localhost:8080"));
	React.useEffect(() => {
		socket.on("connection", () => {
			console.log("User connected !!");
		})
		return function cleanup() {
			socket.emit("disconnection");
		}
	}, [])
	return (
		<Container className={classes.cont}>
			<MessageList socket={socket}/>
			<Send socket={socket}/>
		</Container>
	);
};

export default Chat;