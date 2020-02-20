import React from 'react';
import { Container, TextField, Button, makeStyles, Paper } from '@material-ui/core';
import submit from './utils/submit';
import { connect } from 'react-redux';

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
				submit(value, setValue, props.socket, props.session.user);			
		}	
	}
	return (
		<Paper elevation={4} className={classes.bar}>
			<TextField
				id="standard-multiline-flexible"
				multiline
				rowsMax="4"
				value={props.session.token ? value : "You need to connect to chat !"}
				onChange={handleChangeValue}
				onKeyPress={handleKeyPress}
				className={classes.input}
				variant="outlined"
				disabled={props.session.token ? false : true}
			/>
			<Button
				variant="contained"
				color="primary"
				style={{ height: "55px"}}
				onClick={() => submit(value, setValue, props.socket, props.session.user)}
				disabled={props.session.token ? false : true}
			>
				Send
			</Button>
		</Paper>
	);
};

const mapStateToProps = (state) => ({
	session: state.session
});

export default connect(mapStateToProps)(Send);