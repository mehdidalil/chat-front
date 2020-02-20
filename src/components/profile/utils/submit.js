import { UserApi } from "../../../api"

const submit = (avatarId, userId, token) => {
	UserApi
	.post("/modifyAvatar", { avatarId, userId }, {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	})
	.then(response => console.log(response))
	.catch(err => {
		if (err.response.status === 500)
			console.log("Not logged");
		else
			console.log(err.response);
	});
};

export default submit;