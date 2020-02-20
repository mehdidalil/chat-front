const initInputs = (inputs) => {
	const obj = {};

	inputs.forEach(input => {
		obj[input.id] = ""
	});
	return (obj);
}

export default initInputs;