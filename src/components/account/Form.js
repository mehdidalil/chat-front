import React from 'react';
import { Paper, TextField, Container, makeStyles, Button, Typography } from '@material-ui/core';
import { Popup } from '../popup';

const useStyles = makeStyles(theme => ({
	cont: {
		maxWidth: "500px",
		width: "80vw",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
	},
	title: {
		margin: "30px 0px 20px 0px",
	},
	form: {
		width: "90%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		margin: "20px 0px 20px 0px",
	},
	field: {
		margin: "5px 0px 5px 0px",
	},
	error: {
		color: "red",
	},
	buttons: {
		display: "flex",
		justifyContent: "center",
		margin: "20px 0px 20px 0px",
	}
}));

const Form = (props) => {
	const classes = useStyles();
	const [formVal, setFormVal] = React.useState(props.inputs);
	const [popup, setPopup] = React.useState(false);
	const [error, setError] = React.useState("");
	const handleChangeForm = evt => {
		setFormVal({ ...formVal, [evt.target.id]: evt.target.value });
	};
	const submit = () => {
		try {
			if (props.check)
				props.check(formVal);
			props
			.submit(formVal)
			.then(response => {
				if (props.action)
					props.action(response.data);
				setPopup(props.popups.ok(setPopup));
			})
			.catch(err => {
				console.log(err);
				if (err.response)
					setError(err.response.data);
			});
		}
		catch (e) {
			setError(e.message);
		}
	};
	return (
		<Paper elevation={4} className={classes.cont}>
			<Container className={classes.title}>
				<Typography variant="h4" component="h4" align="center" color="primary">{props.title}</Typography>
			</Container>
			<Container className={classes.form}>
				{Object.keys(formVal).map(key => (
					<TextField
						key={key}
						id={key}
						value={formVal[key]}
						onChange={handleChangeForm}
						label={props.labels[key]}
						variant="outlined"
						type={props.types[key]}
						className={classes.field}
						color="primary"
					/>
				))}
			</Container>
			<div className={classes.error}>
				{error}
			</div>
			<Container className={classes.buttons}>
				<Button onClick={submit} variant="outlined" color="primary">OK</Button>
			</Container>
			{popup ? <Popup info={popup} /> : ""}
		</Paper>
	);
};

export default Form;