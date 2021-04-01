import { combineReducers } from 'redux';
import { memesReducer } from './memes/memesReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
	memes: memesReducer,
	user: userReducer
});
