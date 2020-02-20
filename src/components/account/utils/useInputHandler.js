import React from 'react';

const useInputHandler = (init) => {
	const [content, setContent] = React.useState({...init});

	return {
		content,
		setContent,
		onChange: evt => setContent({
			...content,
			[evt.target.id]: evt.target.value,
		}),
	};
}

export default useInputHandler;