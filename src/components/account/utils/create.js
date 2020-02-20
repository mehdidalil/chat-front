import { UserApi } from "../../../api";

const create = (form, setError) => {
	const { username, password, passwordConfirm, mail } = form.content;

	if (password !== passwordConfirm)
		return setError(`You did'nt enter the same password !`);
		
	UserApi
	.post("/create", { username, password, mail })
	.then(response => console.log(response))
	.catch(err => setError(err.response.data));
};

export default create;