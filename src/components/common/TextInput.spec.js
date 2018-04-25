import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('should have a text input element', () => {
    const props = {
        label: 'Test Label',
        name: 'testName',
        onChange: jest.fn(),
        placeholder: '',
        value: 'Test Location'
    };

    const wrapper = shallow(<TextInput {...props} />);
    const input = wrapper.find('input');
    expect(input.prop('type')).toEqual('text');
  });
});
