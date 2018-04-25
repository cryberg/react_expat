import React from 'react';
import { shallow } from 'enzyme';
import LocationsList from './LocationsList';
import LocationRowItem from './LocationRowItem';

describe('<LocationsList />', () => {
    it('should display weather locations when locations have been saved', () => {
        const savedLocations = [{
            condition: {
                text: "Light drizzle", 
                icon: "//cdn.apixu.com/weather/64x64/day/266.png", 
                code: 1153
            },
            locationId: "Washington, District of Columbia, United States of America",
            maxtemp_c: 17,
            maxtemp_f: 63,
            mintemp_c: 10,
            mintemp_f: 50,
            name: "Washington",
            temp_c: 17,
            temp_f: 63
        }];
    
        const wrapper = shallow(<LocationsList savedLocations={savedLocations}/>);
        const locationRow = wrapper.find(LocationRowItem);
        expect(locationRow.length).toEqual(1);
    });

    it('should display an empty view when locations have not been saved', () => {
        const wrapper = shallow(<LocationsList savedLocations={[]}/>);
        
        const locationRow = wrapper.find(LocationRowItem);
        const emptyView = wrapper.find('.empty-view');
        expect(locationRow.length).toEqual(0);
        expect(emptyView.length).toEqual(1);
    });

    it('should display an empty view with the text: You have no selected locations!', () => {
        const wrapper = shallow(<LocationsList savedLocations={[]}/>);
        
        const emptyView = wrapper.find('.empty-view');
        expect(emptyView.text()).toEqual('You have no selected locations!');
    });
});