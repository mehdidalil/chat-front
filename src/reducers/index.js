import { combineReducers } from 'redux';
import MessagesReducer from './Messages';
import AvatarsReducer from './Avatars';
import SessionReducer from './Session';
import UsersReducer from './Users';

export default combineReducers({
	messages: MessagesReducer,
	avatars: AvatarsReducer,
	session: SessionReducer,
	users: UsersReducer,
});