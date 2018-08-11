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

const Router = ({ auth = {} }) => {
  console.log(auth)


  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        (Object.keys(auth).length > 0 ? (
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
        <PrivateRoute path="/profile" component={LoginScreen} />
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
