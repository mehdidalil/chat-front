import React from 'react';
import ReactDOM from 'react-dom';
import { Routing } from './components';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import store from './store';

const App = (props) => (
	<Provider store={store}>
		<CssBaseline />
		<Routing />
	</Provider>
);

ReactDOM.render(<App />, document.querySelector("#root"));