import React from 'react';
import ReactDOM from 'react-dom';
import { Routing } from './components';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const App = (props) => (
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<CssBaseline />
		<Routing />
	</Provider>
);

ReactDOM.render(<App />, document.querySelector("#root"));