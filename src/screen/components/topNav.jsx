import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'

class TopNav extends React.Component {
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
      <header id="m_header" className="m-grid__item    m-header " m-minimize-offset={200} m-minimize-mobile-offset={200}>
        <div className="m-container m-container--fluid m-container--full-height">
          <div className="m-stack m-stack--ver m-stack--desktop">
            {/* BEGIN: Brand */}
            <div className="m-stack__item m-brand  m-brand--skin-dark" style={{ visibility: 'hidden' }} />
            {/* END: Brand */}
            <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
              {/* BEGIN: Horizontal Menu */}
              <button className="m-aside-header-menu-mobile-close m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn">
                <i className="la la-close" />
              </button>
              <div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
                <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">
                  <li className="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect={1} aria-haspopup="true">
                    <Link to="/main" className="m-menu__link m-menu__toggle">
                      <i className="m-menu__link-icon flaticon-add" />
                      <span className="m-menu__link-text">Actions</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* END: Horizontal Menu */}
              {/* BEGIN: Topbar */}
              <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid">
                <div className="m-stack__item m-topbar__nav-wrapper">
                  <ul className="m-topbar__nav m-nav m-nav--inline">
                    <li
                      className="m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light"
                      id="m_quicksearch"
                    >
                      <Link to="/profile" className="m-nav__link">
                        <span className="m-nav__link-icon">
                          <i className="flaticon-avatar" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END: Topbar */}
            </div>
          </div>
        </div>
      </header>
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
  )(TopNav),
)
