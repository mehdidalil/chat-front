const MessagesReducer = (state, action) => {
	if (state === undefined) {
		return ([]);
	}
	if (action.type === "FETCH_MESSAGES")
		return [ ...state, ...action.payload];
	return state;
};

export default MessagesReducer;