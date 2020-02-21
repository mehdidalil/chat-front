import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Avatar, makeStyles, Button, fade } from '@material-ui/core';
import { deauthUser, changeAvatar } from '../../actions';
import { UserApi } from '../../api';
import { Popup } from '../popup';
import { Link as RouterLink } from 'react-router-dom';

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
		"&:hover": {
			filter: "sepia(30%)"
		}
	},
	button: {
		margin: "10px 0px 10px 0px",
	},
	buttons: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		margin: "20px 0px 10px 0px",
	},
	select: {
		background: fade(theme.palette.primary.main, 0.5),
		borderRadius: "100px",
		transition: "0.1s",
	},
}));

const popups = {
	ok: setPopup => ({
		message: "Your profil has been updated !",
		buttons: [
			{ label: "OK", callback: () => setPopup(false) },
			{ label: "GO TO CHAT", path: "/chat" }
		],
	}),
	fail: setPopup => ({
		message: "You must login before !",
		buttons: [
			{ label: "OK", path: "/login"},
		],
	}),
};

const AvatarSelection = (props) => {
	const classes = useStyles();
	const [avatarId, setAvatarId] = React.useState("avatar0");
	const [popup, setPopup] = React.useState(false);

	const handleChangeAvatar = (evt) => {
		const prevImg = document.querySelector(`#${avatarId}`);
		if (prevImg)
			prevImg.parentElement.parentElement.classList.remove(classes.select);
		setAvatarId(`${evt.target.id}`);
		const newImg = document.querySelector(`#${evt.target.id}`);
		newImg.parentElement.parentElement.classList.add(classes.select);
	};
	const submit = () => {
		UserApi
		.post("/modifyAvatar", { avatarId: avatarId.replace('avatar', '') }, {
			headers: {
				'Authorization': `Bearer ${props.session.token}`,
			},
		})
		.then(response => {
			props.changeAvatar(response.data);
			setPopup(popups.ok(setPopup));
		})
		.catch(err => {
			setPopup(popups.fail(setPopup));
		});
	};
	return (
		<div>
			<Container className={classes.avatarContainer}>
				<Grid container justify="center" spacing={2}>
					{props.avatars.map(avatar => (
						<Grid item key={avatar.id} className={classes.gridHover}>
							<Avatar
								src={avatar.src}
								className={classes.avatar}
								imgProps={{id: `avatar${avatar.id}`}}
								onClick={handleChangeAvatar}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
			<Container className={classes.buttons}>
				<Button onClick={submit} variant="outlined" color="primary" className={classes.button}>CHANGE PIC</Button>
				<Button onClick={props.deauthUser} variant="outlined" color="primary" className={classes.button}>DELOG</Button>
			</Container>
			{popup ? <Popup info={popup} /> : ""}
		</div>
		
	);
};

const mapStateToProps = (state) => ({
	avatars: state.avatars,
	session: state.session,
});

export default connect(mapStateToProps, { deauthUser, changeAvatar })(AvatarSelection);