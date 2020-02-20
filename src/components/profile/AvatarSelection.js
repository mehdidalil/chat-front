import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Avatar, makeStyles, Button } from '@material-ui/core';
import { submit } from './utils';

const useStyles = makeStyles(theme => ({
	avatarContainer: {
		width: "80vw",
		maxWidth: "600px",
		display: "flex",
		justifyContent: "center",
		margin: "10px 10px 10px 10px",
	},
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
	buttons: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "10px",
	},
}));

const AvatarSelection = (props) => {
	const classes = useStyles();
	const [avatarId, setAvatarId] = React.useState(2);
	const handleChangeAvatar = (evt) => {
		setAvatarId(evt.target.id);
		console.log(evt.target.id);
	};
	return (
		<div>
			<Container className={classes.avatarContainer}>
				<Grid container justify="center" spacing={2}>
					{props.avatars.map(avatar => (
						<Grid item key={avatar.id}>
							<Avatar src={avatar.src} className={classes.avatar} imgProps={{id: avatar.id}}onClick={handleChangeAvatar} />
						</Grid>
					))}
				</Grid>
			</Container>
			<Container className={classes.buttons}>
				<Button onClick={() => submit(avatarId, props.session.user.id)}>CHANGE PIC</Button>
			</Container>
		</div>
		
	);
};

const mapStateToProps = (state) => ({
	avatars: state.avatars,
	session: state.session,
});

export default connect(mapStateToProps)(AvatarSelection);