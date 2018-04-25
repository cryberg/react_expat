import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import weatherInfoReducer from './weatherInfoReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  weatherInfoReducer,
  routing: routerReducer
});

export default rootReducer;
