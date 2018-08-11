/**
 * "a@b.com"
 emailVerified
 :
 true
 first_name
 :
 "Frank"
 last_name
 :
 "Lan"
 _id
 :
 "5b6ee375f2de3e0011779851"
 */


import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'

class ProfileScreen extends React.Component {
  render() {
    const {
      token,
      user: {
        _id: id,
        emailId: email,
        emailVerified: verified,
        first_name: firstName,
        last_name: lastName,
      },
    } = this.props.auth
    return (
      (
        <div>
          <h1>Profile</h1>
          <ul>
            <li>ID: {id}</li>
            <li>email: {email}</li>
            <li>verified: {verified ? 'yes' : 'no'}</li>
            <li>first name: {firstName}</li>
            <li>last name: {lastName}</li>
            <li>token: {token}</li>
          </ul>
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
})

export default
withRouter(
  connect(
    mapStateToProps,
    actions,
  )(ProfileScreen),
)
