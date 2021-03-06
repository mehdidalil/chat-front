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
		padding: "8px 8px 8px 8px",
		marginBottom: "10px",
		borderRadius:"15px",
		background: theme.palette.grey[300],
	},
	name: {
		padding: "5px 0px 5px 50px",
		fontSize: "12px",
	},
	content: {
		maxWidth: "60vw",
		fontSize: "14px",
		whiteSpace: 'normal',
  		wordWrap: 'break-word'
	},
	line: {
		margin: "0px 0px 0px 0px",
	}
}));

const Message = (props) => {
	const classes = useStyles();
	let user = props.users.find(u => u.id === parseInt(props.message.userId));
	user = user ? user : { username: "New User", id: 0, avatarId: 0 };
	console.log(user);
	const avatar = props.avatars.find(avatar => avatar.id === user.avatarId);
	return (
		<Container>
			<div className={classes.name}>{user.username}</div>
			<div className={classes.message}>
				<Avatar src={avatar.src} className={classes.avatar} />
				<div className={classes.chip}>
					<div className={classes.content}>
						{props.message.content.split("\n").map((cont, i) => (
						<p className={classes.line} key={i}>{cont}</p>
						))}
					</div>
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