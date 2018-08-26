import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'
import TopNav from '../components/topNav'
import Footer from '../components/footer'
import Subtitle from '../components/subheader'

class Main extends React.Component {
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
      <div>
        <div className="m-grid m-grid--hor m-grid--root m-page">
          <TopNav />
          <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
              <Subtitle title="Main Page" />
              <div className="m-content">
                <div className="row">
                  Here is the main content
                </div>
              </div>
            </div>
          </div>
          <Footer />
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
  )(Main),
)
