import { combineReducers } from 'redux';
import MessagesReducer from './Messages';
import AvatarsReducer from './Avatars';
import SessionReducer from './Session';

export default combineReducers({
	messages: MessagesReducer,
	avatars: AvatarsReducer,
	session: SessionReducer,
});