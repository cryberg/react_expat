import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const NewLocationForm = ({weatherInfo, onSubmit, onChange}) => {
    return (
        <form onSubmit={onSubmit} >
            <TextInput
            onChange ={onChange}
            name = "location"
            label = "Enter a city or location"
            placeholder = ""
            value = {weatherInfo.location}
            disableBool = {weatherInfo.isFetchingNewLocation}
            error = {weatherInfo.errorMsg}
            />
            
            <button 
            type="submit" className="btn add-btn" disabled={weatherInfo.isFetchingNewLocation}>
                {weatherInfo.isFetchingNewLocation ? "Adding..." : "Add!"}
            </button>
        </form>
    )
}

NewLocationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    weatherInfo: PropTypes.object.isRequired
};
  
export default NewLocationForm;