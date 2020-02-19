import React from 'react';
import { Container, TextField, Button, makeStyles } from '@material-ui/core';
import submit from './utils/submit';

const useStyles = makeStyles(theme => ({
	bar: {
		padding: "10px",
		display: "flex",
		justifyContent: "space-between"
	},
	input: {
		width: "70%",
	}
}));

const Send = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState("");
	const handleChangeValue = (evt) => {
		setValue(evt.target.value);
	}
	const handleKeyPress = (evt) => {
		if (evt.which === 13)
		{
			evt.preventDefault();
			if (evt.ctrlKey === true)
				setValue(value + "\n");
			else
				submit(value);
		}	
	}
	return (
		<Container className={classes.bar}>
		<TextField
			id="standard-multiline-flexible"
			multiline
			rowsMax="4"
			value={value}
			onChange={handleChangeValue}
			onKeyPress={handleKeyPress}
			className={classes.input}
        />
		<Button
			variant="contained"
			color="primary"
			style={{ height: "40px"}}
			onClick={() => submit(value)}
		>
			Send
		</Button>
		</Container>
	);
};

export default Send;