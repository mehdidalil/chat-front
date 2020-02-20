import React from 'react';
import { Paper, Typography, Avatar, makeStyles } from '@material-ui/core';
import { initInputs, useInputHandler } from './utils';
import AccountForm from './AccountForm';
import AccountButtons from './AccountButtons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
	paper: {
		display: "flex",
		justifyContent: "center",
		flexDirection: 'column',
		alignItems: 'center',
		width: "80%",
		'@media(min-width: 768px)': {
			width: "45%"
		}
	},
	form: {
		display: "flex",
		justifyContent: "center",
		marginTop: theme.spacing(2),
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	typo: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		textAlign: "center",
	},
	actions: {
		display: "flex",
		justifyContent: "center",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(4),
	}
}));

const AccountCard = (props) => {
	const classes = useStyles();
	const formHandler = useInputHandler(initInputs(props.inputs));
	const [error, setError] = React.useState("");

	return (
		<Paper elevation={6} className={classes.paper}>
			<Avatar className={classes.avatar}>
				<AccountCircleIcon />
			</Avatar>
			<Typography component="h5" variant="h5" className={classes.typo}>
				{props.header.title}
			</Typography>
			<div className={classes.form}>
				<AccountForm
					inputs={props.inputs}
					formHandler={formHandler}
				/>
			</div>
			<div>
				{error}
			</div>
			<div className={classes.actions}>
				<AccountButtons
					buttons={props.buttons}
					form={formHandler}
					setError={setError}
				/>
			</div>
		</Paper>
	)
};
export default AccountCard;