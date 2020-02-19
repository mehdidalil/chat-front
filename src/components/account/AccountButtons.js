import React from 'react';
import { Button } from '@material-ui/core';

const AccountButtons = (props) => {
	return (
		<div>
			{props.buttons.map(button => (
				<Button
					key={button.id}
					id={button.id}
					variant="outlined"
					onClick={() => button.onClick(props.form)}
				>
					{button.text}
				</Button>
			))}
		</div>
		
	)
};

export default AccountButtons;