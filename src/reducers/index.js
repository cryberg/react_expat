import { combineReducers } from 'redux';
import weatherInfoReducer from './weatherInfoReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	weatherInfoReducer,
	routing: routerReducer
});

export default rootReducer;
