import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'

import logo from '../../../statics/theme/metronic/default/dist/default/assets/app/media/img/logos/logo-4.png'
import leftPanelBackground from '../../../statics/theme/metronic/default/dist/default/assets/app/media/img/bg/bg-4.jpg'
import '../style.css'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.username = React.createRef()
    this.password = React.createRef()
  }

  signIn = (event) => {
    event.preventDefault()
    const username = this.username.current.value
    const password = this.password.current.value

    const { fetchLoginResponse } = this.props
    fetchLoginResponse(username, password)
      .then(() => {
        this.props.history.push('/profile')
      })
      .catch(() => {
        this.props.history.push('/login')
      })
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
              <span>Don&apos;t have an account?</span>
              <Link to="/signup" className="m-link m--font-danger">Sign Up</Link>
            </div>
            {/* end::Head */}
            {/* begin::Body */}
            <div className="m-login__body">
              {/* begin::Signin */}
              <div className="m-login__signin">
                <div className="m-login__title">
                  <h3>Log In</h3>
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
                      placeholder="Username"
                      name="username"
                      autoComplete="off"
                      defaultValue="a@b.com"
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
                    >Log In
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
