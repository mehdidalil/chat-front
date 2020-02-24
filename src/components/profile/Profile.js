import React from 'react';
import { Paper } from '@material-ui/core';
import AvatarSelection from './AvatarSelection';

const Profile = (props) => {
	return (
		<Paper elevation={4}>
			<AvatarSelection />
		</Paper>
	);
};

export default Profile;