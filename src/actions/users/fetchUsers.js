import { UserApi } from '../../api';

const fetchUsers = () => {
	return async function(dispatch, getState) {
		const response = await UserApi.get("/");
		dispatch({
			type: "FETCH_USERS",
			payload: response.data
		});
	}
}

export default fetchUsers;