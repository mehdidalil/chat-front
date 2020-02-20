import { UserApi } from "../../../api"

const submit = (avatarId, userId) => {
	UserApi
	.post("/modifyAvatar", { avatarId, userId })
	.then(response => console.log(response))
	.catch(err => console.log(err));
};

export default submit;