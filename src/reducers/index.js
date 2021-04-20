import { combineReducers } from 'redux';
import authReducer from './authReducer';
import missReducer from './missReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
    auth: authReducer,
    miss: missReducer,
    favorite: favoriteReducer
})
