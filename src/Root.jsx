import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainScreen from './screen/main'
import LoginScreen from './screen/login/index'

const loggedIn = false // TODO: remove this stub

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Route path="/login" component={LoginScreen} />
    </Router>
  </Provider>

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
}

export default Root
