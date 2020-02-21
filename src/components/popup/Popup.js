import React from 'react';
import { Paper, makeStyles, Container, Typography, Button } from '@material-ui/core';
import { createPortal } from 'react-dom';
import PopupButtons from './PopupButtons';

const useStyles = makeStyles(theme => ({
	back: {
		width: "2000px",
		height: "2000px",
		position: "fixed",
		top: 0,
		left: 0,
		background: "rgba(0,0,0,0.40)",
		animation: "$appear 300ms",
	},
	card: {
		width: "80vw",
		maxWidth: "400px", 
		height: "30vh",
		position: "fixed",
		margin: "5% auto",
		left: 0,
		right: 0,
		top: "20vh",
	},
	"@keyframes appear": {
		"0%": {
			background: "rgba(0,0,0,0)",
		},
		"100%": {
			background: "rgba(0,0,0,0.30)",
		}
	},
	message: {
		display: "flex",
		justifyContent: "center",
		marginTop: "30px",
		width: "100%",
		height: "50%",
	},
}));

const Popup = (props) => {
	const classes = useStyles();
	const { message, buttons } = props.info;

	return createPortal(
		<Container className={classes.back}>
			<Paper elevation={4} className={classes.card}>
				<Container className={classes.message}>
					<Typography component="h6" variant="h6" align="center">{message}</Typography>
				</Container>
				<PopupButtons buttons={buttons} />
			</Paper>
		</Container>, document.querySelector("#popup"));
};

export default Popup;