import React from 'react';
import { mount } from 'enzyme';
import PropertyItem from '../PropertyItem';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() })

describe('components/PropertiyItem', () => {

  const onClick = jest.fn();
  const props = { id: '1', onClick ,isAdd: true};
  const wrapper = mount(<PropertyItem {...props} />)
   
   it('calls onClick with id when the button is clicked', () => {
     const button = wrapper.find('button');
     button.simulate('click');
     expect(onClick).toHaveBeenCalledWith('1');
   })
})