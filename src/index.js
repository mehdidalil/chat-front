import React from 'react';
import ReactDOM from 'react-dom';
import { MessageList, Send } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { CssBaseline } from '@material-ui/core';
import thunk from 'redux-thunk';
import { Login, Create } from './components/account';

const App = (props) => (
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<CssBaseline />
		<MessageList />
		<Send />
	</Provider>
);

ReactDOM.render(<App />, document.querySelector("#root"));