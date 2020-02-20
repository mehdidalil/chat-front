const initialState = () => ({
	token: false,
	user: false,
});

const SessionReducer = (state, action) => {
	if (state === undefined)
		return initialState;
	if (action.type === "AUTH_USER")
	{
		const newState = { token: action.payload, user: JSON.parse(window.atob(action.payload.split('.')[1]))};
		return newState;
	}
	if (action.type === "DEAUTH_USER")
		return initialState;
	return state;
}

export default SessionReducer;