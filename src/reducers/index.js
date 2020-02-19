import { combineReducers } from 'redux';
import MessagesReducer from './Messages';
import UsersReducer from './Users';
import AvatarsReducer from './Avatars';

export default combineReducers({
	messages: MessagesReducer,
	users: UsersReducer,
	avatars: AvatarsReducer,
});