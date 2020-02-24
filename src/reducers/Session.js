import { socket } from '../api';

const initialState = () => ({
	token: false,
	user: false,
});

const SessionReducer = (state, action) => {
	if (state === undefined)
		return initialState();
	if (action.type === "AUTH_USER")
	{
		socket.io.opts.query = { token: action.payload };
		return ({
			token: action.payload,
			user: JSON.parse(window.atob(action.payload.split('.')[1]))
		});
	}
	if (action.type === "DEAUTH_USER")
	{
		socket.io.opts.query = {}
		return initialState();
	}	
	return state;
}

export default SessionReducer;