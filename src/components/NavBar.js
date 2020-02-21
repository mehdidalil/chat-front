import React from 'react';
import { AppBar, makeStyles, Toolbar, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	nav: {
		position: "fixed",
		top: 0,
		left: 0,
	}
}));

const NavBar = (props) => {
	const classes = useStyles();
	return (
		<AppBar className={classes.nav}>
			<Toolbar>
				<Button variant="contained" color="primary" component={RouterLink} to="/chat">Chat</Button>
				{!props.session.token ?
				<div>
				<Button variant="contained" color="primary" component={RouterLink} to="/login">Login</Button>
				<Button variant="contained" color="primary" component={RouterLink} to="/create">Create</Button>
				</div>
				: ""}
				{props.session.token ?
				<Button variant="contained" color="primary" component={RouterLink} to="/profile">Profile</Button>
				: ""}
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(NavBar);