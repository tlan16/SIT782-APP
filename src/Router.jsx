import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { getAuth } from './store/properties/reducer'
import * as actions from './store/properties/actions'
import LoginScreen from './screen/login'
import SignUpScreen from './screen/signup'
import ProfileScreen from './screen/profile'
import MainScreen from './screen/main'

const Router = ({ auth = {} }) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        (auth.authorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ))
      }
    />
  )

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <PrivateRoute path="/profile" component={ProfileScreen} />
        <PrivateRoute path="/main" component={MainScreen} />
        <Route component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  )
}


const mapStateToProps = state => ({
  auth: getAuth(state),
})

export default connect(
  mapStateToProps,
  actions,
)(Router)
