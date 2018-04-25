import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/weatherActions';


const LocationRowItem = ({location, actions}) => {
    return (
        <div className="row-item">
            <div className="wrapper">
                <div className="location-name">{location.name}</div>
                <img className="condition-icon" src={location.condition.icon} height="35" width="35"/>
                <div className="secondary-text">{location.condition.text}</div>
                {/* <div className="condition">Moderate or heavy showers of ice pellets</div>   */}
            </div>
            <div className="wrapper">
                <div className="temp-cell">
                    <div>{location.temp_f}&deg;<sup>F</sup></div>
                    <div className="secondary-text">{location.maxtemp_f}&deg;/ {location.mintemp_f}&deg;</div>
                </div>
                <div className="temp-cell">
                    <div>{location.temp_c}&deg;<sup>C</sup></div>
                    <div className="secondary-text">{location.maxtemp_c}&deg;/ {location.mintemp_c}&deg;</div>
                </div>
            </div>
            <button title="Remove location" type="button" onClick={() => {
                    actions.removeLocation(location.locationId);
                }}
                >&times;</button>
        </div>
    );
}

LocationRowItem.propTypes = {
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(undefined, mapDispatchToProps)(LocationRowItem);
