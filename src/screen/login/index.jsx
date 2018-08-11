import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'
import Column from './components/Column'
import ErrorComponent from './components/ErrorComponent'

import {
  getSavedProperties,
  getResultsProperties,
  getIsFetching,
  getErrorMessage,
} from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'


class LoginScreen extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      (
        <div
          style={{
            height: '100%',
          }}
        >
          <div
            className="m-grid__item m-grid__item--fluid   m-grid m-grid--desktop m-grid--ver-desktop m-grid--hor-tablet-and-mobile   m-login m-login--6"
            id="m_login"
            style={{
              height: '100%',
            }}
          >
            <div className="m-grid__item   m-grid__item--order-tablet-and-mobile-2  m-grid m-grid--hor m-login__aside " style={{ backgroundImage: 'url(/statics/theme/metronic/default/dist/default/assets/app/media/img//bg/bg-4.jpg)' }}>
              <div className="m-grid__item">
                <div className="m-login__logo">
                  <a href="/">
                    <img
                      alt="Project A"
                      src="/statics/theme/metronic/default/dist/default/assets/app/media/img/logos/logo-4.png"
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
                    <a href="/" className="m-link">© 2018 Metronic</a>
                  </div>
                  <div className="m-login__section">
                    <a href="/" className="m-link">Privacy</a>
                    <a href="/" className="m-link">Legal</a>
                    <a href="/" className="m-link">Contact</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-grid__item m-grid__item--fluid  m-grid__item--order-tablet-and-mobile-1  m-login__wrapper">
              {/* begin::Head */}
              <div className="m-login__head">
                <span>Don&apos;t have an account?</span>
                <a href="/" className="m-link m--font-danger">Sign Up</a>
              </div>
              {/* end::Head */}
              {/* begin::Body */}
              <div className="m-login__body">
                {/* begin::Signin */}
                <div className="m-login__signin">
                  <div className="m-login__title">
                    <h3>Create Account</h3>
                  </div>
                  {/* begin::Form */}
                  <form className="m-login__form m-form">
                    <div className="form-group m-form__group">
                      <input className="form-control m-input" type="text" placeholder="Username" name="username" autoComplete="off" />
                    </div>
                    <div className="form-group m-form__group">
                      <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" />
                    </div>
                  </form>
                  {/* end::Form */}
                  {/* begin::Action */}
                  <div className="m-login__action">
                    <a href="/" className="m-link">
                      <span>Forgot Password ?</span>
                    </a>
                    <a href="/">
                      <button id="m_login_signin_submit" className="btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Sign In</button>
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
                    <a href="/" className="btn btn-primary m-btn m-btn--pill  m-btn  m-btn m-btn--icon">
                      <span>
                        <i className="fab fa-facebook-f" />
                        <span>Facebook</span>
                      </span>
                    </a>
                    <a href="/" className="btn btn-info m-btn m-btn--pill  m-btn  m-btn m-btn--icon">
                      <span>
                        <i className="fab fa-twitter" />
                        <span>Twitter</span>
                      </span>
                    </a>
                    <a href="/" className="btn btn-danger m-btn m-btn--pill  m-btn  m-btn m-btn--icon">
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
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  saved: getSavedProperties(state),
  results: getResultsProperties(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
})

export default connect(
  mapStateToProps,
  actions,
)(LoginScreen)
