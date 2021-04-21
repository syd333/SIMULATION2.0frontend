import { combineReducers } from 'redux';
import authReducer from './authReducer';
import missReducer from './missReducer';
import favoriteReducer from './favoriteReducer';
import replyReducer from './replyReducer';

export default combineReducers({
    auth: authReducer,
    miss: missReducer,
    favorite: favoriteReducer,
    reply: replyReducer,
})
