import { UserApi } from '../../api';
import deauthUser from './deauthUser';

const checkAuth = (token) => {
	return async (dispatch, getState) => {
		if (getState().session.token)
		{
			try {
				await UserApi.post("/token", {}, {
					headers: {
						'Authorization': `Bearer ${getState().session.token}`,
					},
				});
			}
			catch (e) {
				dispatch(deauthUser());
			};
		}
	}
}

export default checkAuth;