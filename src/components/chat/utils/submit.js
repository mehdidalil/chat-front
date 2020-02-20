import { Socket } from '../../../api';

const submit = (value, setValue) => {
	const userId = 1;

	Socket.emit("addMessage", {userId, content: value});
	setValue("");
	Socket.on("addMessageError", (err) => {
		console.log(err);
	});
};

export default submit;