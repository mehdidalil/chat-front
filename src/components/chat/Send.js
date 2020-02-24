import React from 'react';
import { TextField, Button, makeStyles, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { MessageApi } from '../../api/';
import { checkAuth } from '../../actions';

const useStyles = makeStyles(theme => ({
	bar: {
		padding: "10px",
		display: "flex",
		justifyContent: "space-between",
		position: "fixed",
		bottom: 0,
		left: 0,
		width: "100%"
	},
	input: {
		width: "90%",
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
				submit();			
		}	
	}
	const submit = () => {
		MessageApi.post("/", { content: value }, {
			headers: {
				'Authorization': `Bearer ${props.session.token}`,
			}
		})
		.then(response => {})
		.catch(e => {
			console.log(e);
			props.checkAuth();
		});
		setValue("");
	};
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
				onClick={submit}
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

export default connect(mapStateToProps, { checkAuth })(Send);