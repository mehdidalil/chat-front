import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
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