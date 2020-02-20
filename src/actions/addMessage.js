const addMessage = (data) => {
	return {
		type: "ADD_MESSAGE",
		payload: data
	};
};

export default addMessage;