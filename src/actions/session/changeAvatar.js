const changeAvatar = (avatarId) => {
	return {
		type: "CHANGE_AVATAR",
		payload: avatarId
	}
};

export default changeAvatar;