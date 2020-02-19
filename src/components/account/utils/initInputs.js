const initInputs = (inputs) => {
	const obj = {};

	inputs.forEach(input => {
		obj[input.id] = {
			value: "",
			error: ""
		};
	});
	return (obj);
}

export default initInputs;