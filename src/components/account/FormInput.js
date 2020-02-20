import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	input: {
		marginBottom: theme.spacing(2),
	},
}));

const FormInput = (props) => {
	const classes = useStyles();
	const { formHandler, errorHandler } = props;
	const value = formHandler.content[props.id];
	return (
		<div className={classes.input}>
			<TextField
				id={props.id}
				label={props.label}
				variant="outlined"
				onChange={formHandler.onChange}
				value={value}
				inputProps={{maxLength: "64"}}
				type={props.type}
			/>
		</div>
	)
}

export default FormInput;