import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import MainScreen from './screen/main'
import LoginScreen from './screen/login'

const loggedIn = false // TODO: remove this stub

const Root = ({ store }) =>
  <Provider store={store}>
    {
      loggedIn
        ? <MainScreen />
        : <LoginScreen />
    }
  </Provider>

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
}

export default Root
