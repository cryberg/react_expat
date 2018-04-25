import React from 'react';
import { shallow } from 'enzyme';
import NewLocationForm from './NewLocationForm';
import TextInput from './common/TextInput';

function getWeatherInfo(args) {
    const defaultWeatherInfo = {
        location: 'Test Location',
        isFetchingNewLocation: false,
        errorMsg: '',
        savedLocations: []  
    };
  
    return {
      ...defaultWeatherInfo,
      ...args
    };
}

describe('<NewLocationForm />', () => {
    it('should contain a <TextInput /> component', () => {
        const wrapper = shallow(
        <NewLocationForm
            onSubmit={jest.fn()}
            onChange={jest.fn()}
            weatherInfo={getWeatherInfo()}
        />);
        const textInput = wrapper.find(TextInput);
    
        expect(textInput.length).toEqual(1);
    });

    it('should handle form submit', () => {
        const onSubmit = jest.fn();
        const wrapper = shallow(<NewLocationForm
            onSubmit={onSubmit}
            onChange={jest.fn()}
            weatherInfo={getWeatherInfo()}
        />);
    
        expect(onSubmit).not.toBeCalled();
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(onSubmit).toHaveBeenCalled();
      });
});