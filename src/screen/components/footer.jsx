import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'

class Footer extends React.Component {
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
      <footer className="m-grid__item m-footer">
        <div className="m-container m-container--fluid m-container--full-height m-page__container">
          <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
            <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
              <span className="m-footer__copyright">
                    2018 © Powered by Frank Lan
              </span>
            </div>
            <div className="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
              <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
                <li className="m-nav__item">
                  <a href="#" className="m-nav__link">
                    <span className="m-nav__link-text">About</span>
                  </a>
                </li>
                <li className="m-nav__item">
                  <a href="#" className="m-nav__link">
                    <span className="m-nav__link-text">Privacy</span>
                  </a>
                </li>
                <li className="m-nav__item">
                  <a href="#" className="m-nav__link">
                    <span className="m-nav__link-text">T&amp;C</span>
                  </a>
                </li>
                <li className="m-nav__item">
                  <a href="#" className="m-nav__link">
                    <span className="m-nav__link-text">Purchase</span>
                  </a>
                </li>
                <li className="m-nav__item m-nav__item">
                  <a href="#" className="m-nav__link" data-toggle="m-tooltip" title="Support Center" data-placement="left">
                    <i className="m-nav__link-icon flaticon-info m--icon-font-size-lg3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
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
  )(Footer),
)
