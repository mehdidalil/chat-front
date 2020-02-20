const SessionReducer = (state, action) => {
	if (state === undefined)
		return {token: false, user: false};
	if (action.type === "AUTH_USER")
	{
		const newState = { token: action.payload, user: JSON.parse(window.atob(action.payload.split('.')[1]))};
		return newState;
	}
	return state;
}

export default SessionReducer;