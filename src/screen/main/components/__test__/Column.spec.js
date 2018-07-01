import React from 'react';
import { shallow } from 'enzyme';
import Column from '../Column';
import {  ConnectedPropertyItem } from '../PropertyItem';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() })

describe('components/Column', () => {
     it('passes down a ids prop and renders a list of children according to ids', () => {
       const ids = ['1','2'];
       const isAdd = true;
       const wrapper = shallow(<Column ids = {ids} isAdd = {isAdd}/>);
       expect(wrapper.find(ConnectedPropertyItem).length).toBe(2);
     })
})