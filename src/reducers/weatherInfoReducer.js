import { ON_CHANGE_INPUT, CREATE_NEW_LOCATION_FETCH, CREATE_NEW_LOCATION_SUCCESS, CREATE_NEW_LOCATION_FAILURE, REMOVE_LOCATION } from '../actions/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function weatherInfoReducer(state = initialState.weatherInfo, action) {
  let newState;
  
  switch (action.type) {
    case ON_CHANGE_INPUT:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      return newState;

    case CREATE_NEW_LOCATION_FETCH:
      newState = Object.assign({}, state, {isFetchingNewLocation: true});
      return newState;

    case CREATE_NEW_LOCATION_SUCCESS:
      if(state.savedLocations.filter(location => location.locationId === action.newLocation.locationId).length > 0) {
        newState = Object.assign(
          {}, state, {
            isFetchingNewLocation: false, 
            errorMsg: 'Cannot add a location that is already in the list'
          });        
      } else {
        newState = Object.assign(
          {}, state, {
            location: '',
            isFetchingNewLocation: false, 
            errorMsg: '',
            savedLocations: state.savedLocations.concat(action.newLocation)
          });
      }
      return newState;

    case CREATE_NEW_LOCATION_FAILURE: 
      newState = Object.assign(
        {}, state, {
          isFetchingNewLocation: false,
          errorMsg: action.rejectReason
        });
      return newState;

    case REMOVE_LOCATION:
      newState = Object.assign({}, state, {savedLocations: state.savedLocations.filter(location => location.locationId !== action.locationId)});
      return newState;

    default:
      return state;
  }
}
