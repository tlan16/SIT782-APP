import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import {
  getSavedProperties,
  getResultsProperties,
  getIsFetching,
  getErrorMessage, getAuth,
} from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'

import logo from '../../../statics/theme/metronic/default/dist/default/assets/app/media/img/logos/logo-4.png'
import leftPanelBackground from '../../../statics/theme/metronic/default/dist/default/assets/app/media/img/bg/bg-4.jpg'
import '../style.css'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.createFormRefs()
  }

  createFormRefs() {
    this.firstName = React.createRef()
    this.lastName = React.createRef()
    this.username = React.createRef()
    this.password = React.createRef()
  }

  signIn = async (event) => {
    event.preventDefault()
    const firstName = this.firstName.current.value
    const lastName = this.lastName.current.value
    const username = this.username.current.value
    const password = this.password.current.value

    const { fetchSignupResponse } = this.props
    await fetchSignupResponse(
      firstName,
      lastName,
      username,
      password,
    )
    this.props.history.push('/profile')
  }

  render() {
    const {
      auth,
    } = this.props

    return (
      (
        <div
          className="m-grid__item m-grid__item--fluid   m-grid m-grid--desktop m-grid--ver-desktop m-grid--hor-tablet-and-mobile   m-login m-login--6"
          id="m_login"
          style={{
            height: '100%',
          }}
        >
          <div
            className="m-grid__item   m-grid__item--order-tablet-and-mobile-2  m-grid m-grid--hor m-login__aside "
            style={
              {
                backgroundImage: `url(${leftPanelBackground})`,
              }
            }
          >
            <div className="m-grid__item">
              <div className="m-login__logo">
                <a href="/">
                  <img
                    alt="Project A"
                    src={logo}
                  />
                </a>
              </div>
            </div>
            <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver">
              <div className="m-grid__item m-grid__item--middle">
                <span className="m-login__title">Whatever CTA&apos;s wave purpose important exit element</span>
                <span className="m-login__subtitle">Lorem ipsum amet estudiat</span>
              </div>
            </div>
            <div className="m-grid__item">
              <div className="m-login__info">
                <div className="m-login__section">
                  <a href="/" className="m-link disabledLink">© {(new Date()).getFullYear()} All Rights Reserved</a>
                </div>
                <div className="m-login__section">
                  <a href="/" className="m-link disabledLink">Privacy</a>
                  <a href="/" className="m-link disabledLink">Legal</a>
                  <a href="/" className="m-link disabledLink">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="m-grid__item m-grid__item--fluid  m-grid__item--order-tablet-and-mobile-1  m-login__wrapper">
            {/* begin::Head */}
            <div className="m-login__head">
              <span>Already have an account?</span>
              <Link to="/signin" className="m-link m--font-danger">Log In</Link>
            </div>
            {/* end::Head */}
            {/* begin::Body */}
            <div className="m-login__body">
              {/* begin::Signin */}
              <div className="m-login__signin">
                <div className="m-login__title">
                  <h3>Sign Up</h3>
                </div>
                {
                  auth.reason ? <span className="text-danger">Login Failed: {auth.reason}</span> : undefined
                }
                {/* begin::Form */}
                <form className="m-login__form m-form">
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      autoComplete="off"
                      defaultValue={process.env.NODE_ENV === 'development' ? 'Test' : ''}
                      ref={this.firstName}
                      disabled={auth.loading}
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      autoComplete="off"
                      defaultValue={process.env.NODE_ENV === 'development' ? 'User' : ''}
                      ref={this.lastName}
                      disabled={auth.loading}
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="text"
                      placeholder="Username"
                      name="username"
                      autoComplete="off"
                      defaultValue={process.env.NODE_ENV === 'development' ? `${Math.random().toString(36).substring(7)}@example.com` : ''}
                      ref={this.username}
                      disabled={auth.loading}
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input m-login__form-input--last"
                      type="password"
                      placeholder="Password"
                      name="password"
                      defaultValue="12345"
                      ref={this.password}
                      disabled={auth.loading}
                    />
                  </div>
                </form>
                {/* end::Form */}
                {/* begin::Action */}
                <div className="m-login__action">
                  <a href="/" className="m-link">
                    <span>Forgot Password ?</span>
                  </a>
                  <a href="/">
                    <button
                      className="btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn--primary"
                      onClick={this.signIn}
                      disabled={auth.loading}
                    >Sign Up
                    </button>
                  </a>
                </div>
                {/* end::Action */}
                {/* begin::Divider */}
                <div className="m-login__form-divider">
                  <div className="m-divider">
                    <span />
                    <span>OR</span>
                    <span />
                  </div>
                </div>
                {/* end::Divider */}
                {/* begin::Options */}
                <div className="m-login__options">
                  <a href="/" className="btn btn-primary m-btn m-btn--pill  m-btn  m-btn m-btn--icon disabled">
                    <span>
                      <i className="fab fa-facebook-f" />
                      <span>Facebook</span>
                    </span>
                  </a>
                  <a href="/" className="btn btn-info m-btn m-btn--pill  m-btn  m-btn m-btn--icon disabled">
                    <span>
                      <i className="fab fa-twitter" />
                      <span>Twitter</span>
                    </span>
                  </a>
                  <a href="/" className="btn btn-danger m-btn m-btn--pill  m-btn  m-btn m-btn--icon disabled">
                    <span>
                      <i className="fab fa-google" />
                      <span>Google</span>
                    </span>
                  </a>
                </div>
                {/* end::Options */}
              </div>
              {/* end::Signin */}
            </div>
            {/* end::Body */}
          </div>
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
  )(LoginScreen),
)
