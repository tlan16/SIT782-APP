import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAuth, getProfile } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'
import TopNav from '../components/topNav'
import Footer from '../components/footer'

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.password = React.createRef()
    this.newPassword = React.createRef()
    console.log(this.props)
  }

  updateProfile = (event) => {
    event.preventDefault()
    const password = this.password.current.value
    const newPassword = this.newPassword.current.value

    const {
      fetchUpdateProfileResponse,
      auth: { token },
    } = this.props

    fetchUpdateProfileResponse(token, password, newPassword)
      .then(() => {
        this.props.history.push('/profile')
      })
      .catch(() => {
        this.props.history.push('/profile')
      })
  }

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
              <div className="m-content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="m-portlet m-portlet--tab">
                      <div className="m-portlet__head">
                        <div className="m-portlet__head-caption">
                          <div className="m-portlet__head-title">
                            <span className="m-portlet__head-icon m--hide">
                              <i className="la la-gear" />
                            </span>
                            <h3 className="m-portlet__head-text">
                              Profile
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/* begin::Form */}
                      <form className="m-form m-form--fit m-form--label-align-right">
                        <div className="m-portlet__body">
                          <div className="form-group m-form__group">
                            <label>Password</label>
                            <input
                              type="password"
                              className="form-control m-input m-input--square"
                              placeholder="Password"
                              ref={this.password}
                            />
                          </div>
                        </div>
                        <div className="m-portlet__body">
                          <div className="form-group m-form__group">
                            <label>Password</label>
                            <input
                              type="password"
                              className="form-control m-input m-input--square"
                              placeholder="New Password"
                              ref={this.newPassword}
                            />
                          </div>
                        </div>
                        <div className="m-portlet__foot m-portlet__foot--fit">
                          <div className="m-form__actions">
                            <button
                              type="reset"
                              className="btn btn-metal"
                              onClick={this.updateProfile}
                            >Submit
                            </button>
                            <button type="reset" className="btn btn-secondary">Cancel</button>
                          </div>
                        </div>
                      </form>
                      {/* end::Form */}
                    </div>
                  </div>
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
  profile: getProfile(state),
})

export default
withRouter(
  connect(
    mapStateToProps,
    actions,
  )(ProfileScreen),
)
