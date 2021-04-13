import { combineReducers } from 'redux';
import authReducer from './authReducer';
import missReducer from './missReducer';

export default combineReducers({
    auth: authReducer,
    miss: missReducer
})
