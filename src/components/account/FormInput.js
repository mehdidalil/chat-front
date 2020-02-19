import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	input: {
		marginBottom: theme.spacing(2),
	},
}));

const FormInput = (props) => {
	const classes = useStyles();
	const { inputHandler } = props;
	const { value, error } = inputHandler.content[props.id];
	return (
		<div className={classes.input}>
			<TextField
				error={error ? true : false}
				helperText={error ? error : ""}
				id={props.id}
				label={props.label}
				variant="outlined"
				onChange={inputHandler.bind.onChange}
				value={value}
				inputProps={{maxLength: "64"}}
				type={props.type}
			/>
		</div>
	)
}

export default FormInput;