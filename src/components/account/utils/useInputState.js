import React from 'react';

const useInputState = (init) => {
	const [content, setContent] = React.useState({...init});

	return {
		content,
		setContent,
		bind: {
			content,
			onChange: evt => setContent({
				...content,
				[evt.target.id]: {
					...content[evt.target.id],
					value: evt.target.value
				}
			}),
			setError: (prop, errMessage) => setContent({...content, [prop]: {...content[prop], error: errMessage }}),
			resetError: () => {
				Object.keys(content).forEach((k, v) => {
					setContent({...content, [k]: {...content[k], error: ""}});
				})
			}
		}
	};
}

export default useInputState;