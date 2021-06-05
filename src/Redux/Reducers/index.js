import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import generalReducer from './general-reducer';

const rootReducer = combineReducers({
    authReducer,
    generalReducer,
});

export default rootReducer;
