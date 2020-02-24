const UsersReducer = (state, action) => {
	if (state === undefined)
		return ([]);
	if (action.type === "FETCH_USERS")
		return [ ...action.payload ];
	return (state);
};

export default UsersReducer;