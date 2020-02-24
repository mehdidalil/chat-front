import io from 'socket.io-client';

const socket = io(`http://${window.location.hostname}:8080`, {
	autoConnect: false,
});

socket.on("connect", (soc) => {
	console.log("socket: user connected !");
});

export default socket;