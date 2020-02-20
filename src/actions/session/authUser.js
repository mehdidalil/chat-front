const authUser = (data) => {
	return {
		type: "AUTH_USER",
		payload: data
	}
};

export default authUser;