import { MessageApi } from '../api';

const fetchMessages = () => {
	return async function(dispatch, getState) {
		const response = await MessageApi.get("/");
		dispatch({
			type: "FETCH_MESSAGES",
			payload: response.data
		});
	}
}

export default fetchMessages;