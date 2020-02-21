import React from 'react';
import View from './View';
import { Profile } from '../profile';

const ProfileView = (props) => {
	return (
		<View component={Profile} logged redirect="/login" />
	);
};

export default ProfileView;