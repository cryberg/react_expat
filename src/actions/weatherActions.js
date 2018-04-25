import * as types from './actionTypes';
import { WeatherService } from '../services/WeatherService';

const weatherService = new WeatherService();

export function onChange(settings, fieldName, value) {
    return {
        type: types.ON_CHANGE_INPUT,
        settings,
        fieldName,
        value
      };
}

export function createNewLocationFetch() {
    return {
        type: types.CREATE_NEW_LOCATION_FETCH
    }
}

export function createNewLocationSuccess(newLocation) {
    return {
        type: types.CREATE_NEW_LOCATION_SUCCESS,
        newLocation
    }
}

export function createNewLocationFailure(rejectReason) {
    return {
        type: types.CREATE_NEW_LOCATION_FAILURE,
        rejectReason
    }
}

export function createNewLocation(locationName) {
    if(locationName.length <= 0) {
        return () => { false }
    }
    return function (dispatch) {
        dispatch(createNewLocationFetch());
        return weatherService.getDailyWeather(locationName)
        .then( newLocation => { 
            dispatch( createNewLocationSuccess(newLocation) ); 
            },
        ).catch( (errorMsg) => {
            dispatch( createNewLocationFailure(errorMsg) ); 
            }
        );
    }
}

export function removeLocation(locationId) {
    return {
        type: types.REMOVE_LOCATION, 
        locationId
    }
}