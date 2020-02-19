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
		}
	};
}

export default useInputState;