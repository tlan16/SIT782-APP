import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import store from './configureStore';

ReactDOM.render(<Root store = {store}/>, document.getElementById('app'));