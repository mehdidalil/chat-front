import React from 'react';
import { Paper, Grid, Container, Avatar, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import AvatarSelection from './AvatarSelection';

const useStyles = makeStyles(theme => ({
}));

const Profile = (props) => {
	const classes = useStyles();

	return (
		<Paper elevation={4}>
			<AvatarSelection />
		</Paper>
	);
};

export default Profile;