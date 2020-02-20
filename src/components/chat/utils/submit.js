import axios from 'axios';

const submit = (message) => {
	const userId = 1;

	axios
	.post("http://localhost:8000/message/create", { userId, content: message })
	.then(response => console.log(response))
	.catch(err => console.log(err));
};

export default submit;