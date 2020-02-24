import React from 'react';
import ReactDOM from 'react-dom';
import { Routing } from './components';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	console.log("console.log enabled !")
} else {
	console.log = () => {};
}
const App = (props) => (
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<CssBaseline />
		<Routing />
	</Provider>
);

ReactDOM.render(<App />, document.querySelector("#root"));