import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login, Create } from './account';
import { Container } from '@material-ui/core';
import { Chat } from './chat';
import Secret from './Secret';
import NavBar from './NavBar';
import { Profile } from './profile';

const Routing = (props) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Container style={{marginTop: "5em", display: "flex", justifyContent: "center"}}>
				<Route exact path="/login" component={Login} />
				<Route exact path="/create" component={Create} />
				<Route exact path="/chat" component={Chat} />
				<Route exact path="/profile" component={Profile} />
			</Container>
			
		</BrowserRouter>
	);
};

export default Routing;