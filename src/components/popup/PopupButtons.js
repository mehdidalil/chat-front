import React from 'react';
import { Container, Button, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	buttons: {
		display: "flex",
		justifyContent: "center",
		marginTop: "10px",
	},
}))
const PopupButtons = (props) => {
	const classes = useStyles();
	const { buttons } = props;
	
	return (
		<Container className={classes.buttons}>
			{buttons.map((button, k) => {
				const router = button.path ? { component: RouterLink, to: button.path } : {};
				return (
					<Button
					key={k}
					color="primary"
					variant="outlined"
					onClick={button.callback}
					{...router}
					>
						{button.label}
					</Button>
				)})}
		</Container>
	);
};

export default PopupButtons;