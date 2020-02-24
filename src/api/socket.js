import io from 'socket.io-client';
import store from '../store';
import { addMessage, checkAuth } from '../actions';

const socket = io(`http://${window.location.hostname}:8080`, {
	autoConnect: false,
});

socket.on("connect", (soc) => {
	console.log("User connected !");
});

export default socket;