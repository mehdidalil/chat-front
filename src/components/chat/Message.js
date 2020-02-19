import React from 'react';
import { Container, Avatar, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(5),
		height: theme.spacing(5),
		marginRight: "5px",
	},
	message: {
		display: "flex",
		flexDirection: "row",
	},
	chip: {
		padding: "10px 10px 10px 10px",
		marginBottom: "10px",
		borderRadius:"15px",
		background: theme.palette.grey[300],
	},
	name: {
		padding: "5px 0px 5px 55px",
	},
	content: {
		maxWidth: "70vw",
		fontSize: "14px",
		whiteSpace: 'normal',
  		wordWrap: 'break-word'
	}
}));

const Message = (props) => {
	const classes = useStyles();
	const user = props.users.find(user => user.id === props.message.userId);
	const avatar = props.avatars.find(avatar => avatar.id === user.avatarId);
	return (
		<Container>
			<div className={classes.name}>{user.username}</div>
			<div className={classes.message}>
				<Avatar src={avatar.src} className={classes.avatar} />
				<div className={classes.chip}>
					<div className={classes.content}>{props.message.content}</div>
				</div>
			</div>
		</Container>
	)
};

const mapStateToProps = (state) => ({
	users: state.users,
	avatars: state.avatars,
});

export default connect(mapStateToProps)(Message);