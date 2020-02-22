import React from 'react';
import MessageList from './MessageList';
import Send from './Send';
import { makeStyles, Container } from '@material-ui/core';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions';

const useStyles = makeStyles(theme => ({
	cont: {
		width: "100%",
		padding: "0",
		height: "70vh",
	}
}));

const Chat = (props) => {
	const classes = useStyles();
	const [socket, setSocket] = React.useState(socketIOClient(`http://192.168.1.17:8080?token=${props.session.token}`));
	React.useEffect(() => {
		socket.on("connection", (soc) => {
			console.log("User connected !!");
		})
		socket.on("invalidToken", (soc) => {
			props.checkAuth();
		})
		return function cleanup(soc) {
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

const mapStateToProps = state => ({
	session: state.session,
});

export default connect(mapStateToProps, { checkAuth })(Chat);