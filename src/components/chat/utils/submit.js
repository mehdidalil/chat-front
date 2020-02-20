import socketIOClient from 'socket.io-client';

const submit = (value, setValue, socket, user) => {
	console.log(user);

	socket.emit("addMessage", {
		content: value,
		username: user.username,
		avatarId: user.avatarId,
	});
	setValue("");
	socket.on("addMessageError", (err) => {
		console.log(err);
	});
};

export default submit;