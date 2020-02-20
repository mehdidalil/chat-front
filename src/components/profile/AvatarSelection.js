import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Avatar, makeStyles, Button } from '@material-ui/core';
import { submit } from './utils';
import { deauthUser } from '../../actions';

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
	const [avatarId, setAvatarId] = React.useState(0);

	const userId = props.session.user ? props.session.user.id : 0;
	const handleChangeAvatar = (evt) => {
		setAvatarId(evt.target.id);
	};
	return (
		<div>
			<Container className={classes.avatarContainer}>
				<Grid container justify="center" spacing={2}>
					{props.avatars.map(avatar => (
						<Grid item key={avatar.id}>
							<Avatar
								src={avatar.src}
								className={classes.avatar}
								imgProps={{id: avatar.id}}
								onClick={handleChangeAvatar}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
			<Container className={classes.buttons}>
				<Button onClick={() => submit(avatarId, userId, props.session.token)}>CHANGE PIC</Button>
			</Container>
			<Container className={classes.buttons}>
				<Button onClick={() => props.deauthUser()}>DELOG</Button>
			</Container>
		</div>
		
	);
};

const mapStateToProps = (state) => ({
	avatars: state.avatars,
	session: state.session,
});

export default connect(mapStateToProps, { deauthUser })(AvatarSelection);