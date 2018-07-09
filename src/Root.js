import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import MainScreen from './screen/main';

const Root = ({ store }) => {
    return <Provider store = {store}>
        <MainScreen />
    </Provider>;
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};
export default Root;