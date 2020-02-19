import { UserApi } from "../../../api";

const create = (form) => {
	form.bind.resetError();
	const username = form.content.username.value;
	const password = form.content.password.value;
	const passwordConfirm = form.content.passwordConfirm.value;
	const mail = form.content.mail.value;

	if (password !== passwordConfirm)
	{
		form.bind.setError("passwordConfirm", "Not the same password");
		return ;
	}
	UserApi
	.post("/create", { username, password, mail })
	.then(response => console.log(response))
	.catch(err => console.log(err.response));
};

export default create;