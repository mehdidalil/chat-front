import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { LoginView, CreateView, ChatView, ProfileView, NavBar } from './components';

const Routing = (props) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Container style={{width: "100%", padding: "0", marginTop: "5em", display: "flex", justifyContent: "center"}}>
				<Route exact path="/login" component={LoginView} />
				<Route exact path="/create" component={CreateView} />
				<Route exact path="/chat" component={ChatView} />
				<Route exact path="/profile" component={ProfileView} />
			</Container>
		</BrowserRouter>
	);
};

export default Routing;