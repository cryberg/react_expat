import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/weatherActions';
import NewLocationForm from '../NewLocationForm';
import LocationsList from '../LocationsList';

export class WeatherPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	onChange = e => {
		this.props.actions.onChange(this.props.weatherInfo, e.target.name, e.target.value);
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.actions.createNewLocation(this.props.weatherInfo.location);
	}

	render() {
		return (
			<main>
				<LocationsList savedLocations={this.props.weatherInfo.savedLocations} />     
				<NewLocationForm 
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					weatherInfo={this.props.weatherInfo}/>   
			</main>
		);
	}
}

WeatherPage.propTypes = {
	actions: PropTypes.object.isRequired,
	weatherInfo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		weatherInfo: state.weatherInfoReducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
