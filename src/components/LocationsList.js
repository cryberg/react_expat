import React from 'react';
import PropTypes from 'prop-types';
import LocationRowItem from './LocationRowItem';
  
const LocationsList = ({savedLocations}) => {
    return (
        <div className="list-container">
        {savedLocations.length > 0 ? (
            savedLocations.map((location) =>
            <LocationRowItem key={location.locationId}
                    location={location} />
            )
        ) : (
            <div className="empty-view">You have no selected locations!</div>
        )}
        </div>
    );
}

LocationsList.propTypes = {
    savedLocations: PropTypes.array.isRequired
}

export default LocationsList;