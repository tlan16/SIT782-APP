import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import Router from './Router'

const Root = ({ store }) =>
  <Provider store={store}>
    <Router />
  </Provider>

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
}

export default Root
