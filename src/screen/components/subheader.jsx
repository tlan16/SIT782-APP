import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'
import TopNav from '../components/topNav'
import Footer from '../components/footer'

class Subheader extends React.Component {
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

    const {
      title,
    } = this.props

    return (
      <div className="m-subheader ">
        <div className="d-flex align-items-center">
          <div className="mr-auto">
            <h3 className="m-subheader__title ">{title}</h3>
          </div>
        </div>
      </div>
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
  )(Subheader),
)
