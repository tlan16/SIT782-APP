import React from 'react';
import { mount } from 'enzyme';
import PropertyItem from '../PropertyItem';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('components/PropertiyItem', () => {

    const onClick = jest.fn();
    const agency = {
        brandingColors: {
            primary: '#fcfa3b'
        },
        logo: 'logo'
    };
    const property = {
        id:'1',
        price:'price',
        agency:'logo',
        mainImage:'mainImage'
    };
    const props = { id: '1', onClick ,isAdd: true, agency, property};
    const wrapper = mount(<PropertyItem {...props} />);
   
    it('calls onClick with id when the button is clicked', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        expect(onClick).toHaveBeenCalledWith('1');
    });
});