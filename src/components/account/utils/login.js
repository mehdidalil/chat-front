import { UserApi } from "../../../api";

const login = (form, setError, authUser) => {
	const { mail, password } = form.content;

	UserApi
	.post("/login", { mail, password} )
	.then(response => {
		authUser(response.data);
	})
	.catch(err => setError(err.response.data));
}

export default login;