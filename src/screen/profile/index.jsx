import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'

import logo from '../../../statics/theme/metronic/default/dist/default/assets/demo/default/media/img/logo/logo_default_dark.png'
import user4 from '../../../statics/theme/metronic/default/dist/default/assets/app/media/img/users/user4.jpg'

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
      <div>
        {/* BEGIN: Header */}
        <header id="m_header" className="m-grid__item    m-header " m-minimize-offset={200} m-minimize-mobile-offset={200}>
          <div className="m-container m-container--fluid m-container--full-height">
            <div className="m-stack m-stack--ver m-stack--desktop">
              {/* BEGIN: Brand */}
              <div className="m-stack__item m-brand  m-brand--skin-dark ">
                <div className="m-stack m-stack--ver m-stack--general">
                  <div className="m-stack__item m-stack__item--middle m-brand__logo">
                    <a href="../../../index.html" className="m-brand__logo-wrapper">
                      <img alt="logo" src={logo} />
                    </a>
                  </div>
                  <div className="m-stack__item m-stack__item--middle m-brand__tools">
                    {/* BEGIN: Left Aside Minimize Toggle */}
                    <a href="javascript:;" id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block  ">
                      <span />
                    </a>
                    {/* END */}
                    {/* BEGIN: Responsive Aside Left Menu Toggler */}
                    <a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                      <span />
                    </a>
                    {/* END */}
                    {/* BEGIN: Responsive Header Menu Toggler */}
                    <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                      <span />
                    </a>
                    {/* END */}
                    {/* BEGIN: Topbar Toggler */}
                    <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                      <i className="flaticon-more" />
                    </a>
                    {/* BEGIN: Topbar Toggler */}
                  </div>
                </div>
              </div>
              {/* END: Brand */}
              <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                {/* BEGIN: Horizontal Menu */}
                <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn">
                  <i className="la la-close" />
                </button>
                <div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
                  <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">
                    <li className="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect={1} aria-haspopup="true">
                      <a href="javascript:;" className="m-menu__link m-menu__toggle">
                        <i className="m-menu__link-icon flaticon-add" />
                        <span className="m-menu__link-text">Actions</span>
                        <i className="m-menu__hor-arrow la la-angle-down" />
                        <i className="m-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                        <span className="m-menu__arrow m-menu__arrow--adjust" />
                        <ul className="m-menu__subnav">
                          <li className="m-menu__item " aria-haspopup="true">
                            <a href="../../../header/actions.html" className="m-menu__link ">
                              <i className="m-menu__link-icon flaticon-file" />
                              <span className="m-menu__link-text">Create New Post</span>
                            </a>
                          </li>
                          <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="../../../header/actions.html" className="m-menu__link ">
                              <i className="m-menu__link-icon flaticon-diagram" />
                              <span className="m-menu__link-title">
                                <span className="m-menu__link-wrap">
                                  <span className="m-menu__link-text">Generate Reports</span>
                                  <span className="m-menu__link-badge">
                                    <span className="m-badge m-badge--success">2</span>
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="javascript:;" className="m-menu__link m-menu__toggle">
                              <i className="m-menu__link-icon flaticon-business" />
                              <span className="m-menu__link-text">Manage Orders</span>
                              <i className="m-menu__hor-arrow la la-angle-right" />
                              <i className="m-menu__ver-arrow la la-angle-right" />
                            </a>
                            <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                              <span className="m-menu__arrow " />
                              <ul className="m-menu__subnav">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Latest Orders</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Pending Orders</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Processed Orders</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Delivery Reports</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Payments</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Customers</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="#" className="m-menu__link m-menu__toggle">
                              <i className="m-menu__link-icon flaticon-chat-1" />
                              <span className="m-menu__link-text">Customer Feedbacks</span>
                              <i className="m-menu__hor-arrow la la-angle-right" />
                              <i className="m-menu__ver-arrow la la-angle-right" />
                            </a>
                            <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                              <span className="m-menu__arrow " />
                              <ul className="m-menu__subnav">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Customer Feedbacks</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Supplier Feedbacks</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Reviewed Feedbacks</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Resolved Feedbacks</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Feedback Reports</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="../../../header/actions.html" className="m-menu__link ">
                              <i className="m-menu__link-icon flaticon-users" />
                              <span className="m-menu__link-text">Register Member</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect={1} aria-haspopup="true">
                      <a href="javascript:;" className="m-menu__link m-menu__toggle">
                        <i className="m-menu__link-icon flaticon-line-graph" />
                        <span className="m-menu__link-text">Reports</span>
                        <i className="m-menu__hor-arrow la la-angle-down" />
                        <i className="m-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="m-menu__submenu  m-menu__submenu--fixed m-menu__submenu--left" style={{ width: 1000 }}>
                        <span className="m-menu__arrow m-menu__arrow--adjust" />
                        <div className="m-menu__subnav">
                          <ul className="m-menu__content">
                            <li className="m-menu__item">
                              <h3 className="m-menu__heading m-menu__toggle">
                                <span className="m-menu__link-text">Finance Reports</span>
                                <i className="m-menu__ver-arrow la la-angle-right" />
                              </h3>
                              <ul className="m-menu__inner">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-map" />
                                    <span className="m-menu__link-text">Annual Reports</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-user" />
                                    <span className="m-menu__link-text">HR Reports</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-clipboard" />
                                    <span className="m-menu__link-text">IPO Reports</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-graphic-1" />
                                    <span className="m-menu__link-text">Finance Margins</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-graphic-2" />
                                    <span className="m-menu__link-text">Revenue Reports</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="m-menu__item">
                              <h3 className="m-menu__heading m-menu__toggle">
                                <span className="m-menu__link-text">Project Reports</span>
                                <i className="m-menu__ver-arrow la la-angle-right" />
                              </h3>
                              <ul className="m-menu__inner">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--line">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Coca Cola CRM</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--line">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Delta Airlines Booking Site</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--line">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Malibu Accounting</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--line">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Vineseed Website Rewamp</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--line">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Zircon Mobile App</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--line">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Mercury CMS</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="m-menu__item">
                              <h3 className="m-menu__heading m-menu__toggle">
                                <span className="m-menu__link-text">HR Reports</span>
                                <i className="m-menu__ver-arrow la la-angle-right" />
                              </h3>
                              <ul className="m-menu__inner">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Staff Directory</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Client Directory</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Salary Reports</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Staff Payslips</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Corporate Expenses</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                    </i>
                                    <span className="m-menu__link-text">Project Expenses</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="m-menu__item">
                              <h3 className="m-menu__heading m-menu__toggle">
                                <span className="m-menu__link-text">Reporting Apps</span>
                                <i className="m-menu__ver-arrow la la-angle-right" />
                              </h3>
                              <ul className="m-menu__inner">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Report Adjusments</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Sources &amp; Mediums</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Reporting Settings</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Conversions</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Report Flows</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <span className="m-menu__link-text">Audit &amp; Logs</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect={1} aria-haspopup="true">
                      <a href="javascript:;" className="m-menu__link m-menu__toggle">
                        <i className="m-menu__link-icon flaticon-paper-plane" />
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">Apps</span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--brand m-badge--wide">new</span>
                            </span>
                          </span>
                        </span>
                        <i className="m-menu__hor-arrow la la-angle-down" />
                        <i className="m-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                        <span className="m-menu__arrow m-menu__arrow--adjust" />
                        <ul className="m-menu__subnav">
                          <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="../../../header/actions.html" className="m-menu__link ">
                              <i className="m-menu__link-icon flaticon-business" />
                              <span className="m-menu__link-text">eCommerce</span>
                            </a>
                          </li>
                          <li className="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="../../../crud/datatable_v1.html" className="m-menu__link m-menu__toggle">
                              <i className="m-menu__link-icon flaticon-computer" />
                              <span className="m-menu__link-text">Audience</span>
                              <i className="m-menu__hor-arrow la la-angle-right" />
                              <i className="m-menu__ver-arrow la la-angle-right" />
                            </a>
                            <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                              <span className="m-menu__arrow " />
                              <ul className="m-menu__subnav">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-users" />
                                    <span className="m-menu__link-text">Active Users</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-interface-1" />
                                    <span className="m-menu__link-text">User Explorer</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-lifebuoy" />
                                    <span className="m-menu__link-text">Users Flows</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-graphic-1" />
                                    <span className="m-menu__link-text">Market Segments</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-graphic" />
                                    <span className="m-menu__link-text">User Reports</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="../../../header/actions.html" className="m-menu__link ">
                              <i className="m-menu__link-icon flaticon-map" />
                              <span className="m-menu__link-text">Marketing</span>
                            </a>
                          </li>
                          <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="../../../header/actions.html" className="m-menu__link ">
                              <i className="m-menu__link-icon flaticon-graphic-2" />
                              <span className="m-menu__link-title">
                                <span className="m-menu__link-wrap">
                                  <span className="m-menu__link-text">Campaigns</span>
                                  <span className="m-menu__link-badge">
                                    <span className="m-badge m-badge--success">3</span>
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect={1} aria-haspopup="true">
                            <a href="javascript:;" className="m-menu__link m-menu__toggle">
                              <i className="m-menu__link-icon flaticon-infinity" />
                              <span className="m-menu__link-text">Cloud Manager</span>
                              <i className="m-menu__hor-arrow la la-angle-right" />
                              <i className="m-menu__ver-arrow la la-angle-right" />
                            </a>
                            <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                              <span className="m-menu__arrow " />
                              <ul className="m-menu__subnav">
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-add" />
                                    <span className="m-menu__link-title">
                                      <span className="m-menu__link-wrap">
                                        <span className="m-menu__link-text">File Upload</span>
                                        <span className="m-menu__link-badge">
                                          <span className="m-badge m-badge--danger">3</span>
                                        </span>
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-signs-1" />
                                    <span className="m-menu__link-text">File Attributes</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-folder" />
                                    <span className="m-menu__link-text">Folders</span>
                                  </a>
                                </li>
                                <li className="m-menu__item " m-menu-link-redirect={1} aria-haspopup="true">
                                  <a href="../../../header/actions.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-cogwheel-2" />
                                    <span className="m-menu__link-text">System Settings</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* END: Horizontal Menu */}
                {/* BEGIN: Topbar */}
                <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid">
                  <div className="m-stack__item m-topbar__nav-wrapper">
                    <ul className="m-topbar__nav m-nav m-nav--inline">
                      <li className="m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light" m-dropdown-toggle="click" id="m_quicksearch" m-quicksearch-mode="dropdown" m-dropdown-persistent={1}>
                        <a href="#" className="m-nav__link m-dropdown__toggle">
                          <span className="m-nav__link-icon">
                            <i className="flaticon-search-1" />
                          </span>
                        </a>
                        <div className="m-dropdown__wrapper">
                          <span className="m-dropdown__arrow m-dropdown__arrow--center" />
                          <div className="m-dropdown__inner ">
                            <div className="m-dropdown__header">
                              <form className="m-list-search__form">
                                <div className="m-list-search__form-wrapper">
                                  <span className="m-list-search__form-input-wrapper">
                                    <input id="m_quicksearch_input" autoComplete="off" type="text" name="q" className="m-list-search__form-input" defaultValue placeholder="Search..." />
                                  </span>
                                  <span className="m-list-search__form-icon-close" id="m_quicksearch_close">
                                    <i className="la la-remove" />
                                  </span>
                                </div>
                              </form>
                            </div>
                            <div className="m-dropdown__body">
                              <div className="m-dropdown__scrollable m-scrollable" data-scrollable="true" data-height={300} data-mobile-height={200}>
                                <div className="m-dropdown__content" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" m-dropdown-toggle="click" m-dropdown-persistent={1}>
                        <a href="#" className="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
                          <span className="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger" />
                          <span className="m-nav__link-icon">
                            <i className="flaticon-music-2" />
                          </span>
                        </a>
                        <div className="m-dropdown__wrapper">
                          <span className="m-dropdown__arrow m-dropdown__arrow--center" />
                          <div className="m-dropdown__inner">
                            <div className="m-dropdown__header m--align-center" style={{ background: 'url(../../../assets/app/media/img/misc/notification_bg.jpg)', backgroundSize: 'cover' }}>
                              <span className="m-dropdown__header-title">9 New</span>
                              <span className="m-dropdown__header-subtitle">User Notifications</span>
                            </div>
                            <div className="m-dropdown__body">
                              <div className="m-dropdown__content">
                                <ul className="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                                  <li className="nav-item m-tabs__item">
                                    <a className="nav-link m-tabs__link active" data-toggle="tab" href="#topbar_notifications_notifications" role="tab">
                                      Alerts
                                    </a>
                                  </li>
                                  <li className="nav-item m-tabs__item">
                                    <a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_events" role="tab">Events</a>
                                  </li>
                                  <li className="nav-item m-tabs__item">
                                    <a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_logs" role="tab">Logs</a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div className="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
                                    <div className="m-scrollable" data-scrollable="true" data-height={250} data-mobile-height={200}>
                                      <div className="m-list-timeline m-list-timeline--skin-light">
                                        <div className="m-list-timeline__items">
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge -m-list-timeline__badge--state-success" />
                                            <span className="m-list-timeline__text">12 new users registered</span>
                                            <span className="m-list-timeline__time">Just now</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge" />
                                            <span className="m-list-timeline__text">System shutdown
                                              <span className="m-badge m-badge--success m-badge--wide">pending</span>
                                            </span>
                                            <span className="m-list-timeline__time">14 mins</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge" />
                                            <span className="m-list-timeline__text">New invoice received</span>
                                            <span className="m-list-timeline__time">20 mins</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge" />
                                            <span className="m-list-timeline__text">DB overloaded 80%
                                              <span className="m-badge m-badge--info m-badge--wide">settled</span>
                                            </span>
                                            <span className="m-list-timeline__time">1 hr</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge" />
                                            <span className="m-list-timeline__text">System error -
                                              <a href="#" className="m-link">Check</a>
                                            </span>
                                            <span className="m-list-timeline__time">2 hrs</span>
                                          </div>
                                          <div className="m-list-timeline__item m-list-timeline__item--read">
                                            <span className="m-list-timeline__badge" />
                                            <span href="" className="m-list-timeline__text">New order received
                                              <span className="m-badge m-badge--danger m-badge--wide">urgent</span>
                                            </span>
                                            <span className="m-list-timeline__time">7 hrs</span>
                                          </div>
                                          <div className="m-list-timeline__item m-list-timeline__item--read">
                                            <span className="m-list-timeline__badge" />
                                            <span className="m-list-timeline__text">Production server down</span>
                                            <span className="m-list-timeline__time">3 hrs</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge" />
                                            <span className="m-list-timeline__text">Production server up</span>
                                            <span className="m-list-timeline__time">5 hrs</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                                    <div className="m-scrollable" data-scrollable="true" data-height={250} data-mobile-height={200}>
                                      <div className="m-list-timeline m-list-timeline--skin-light">
                                        <div className="m-list-timeline__items">
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state1-success" />
                                            <a href="" className="m-list-timeline__text">New order received</a>
                                            <span className="m-list-timeline__time">Just now</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state1-danger" />
                                            <a href="" className="m-list-timeline__text">New invoice received</a>
                                            <span className="m-list-timeline__time">20 mins</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state1-success" />
                                            <a href="" className="m-list-timeline__text">Production server up</a>
                                            <span className="m-list-timeline__time">5 hrs</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state1-info" />
                                            <a href="" className="m-list-timeline__text">New order received</a>
                                            <span className="m-list-timeline__time">7 hrs</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state1-info" />
                                            <a href="" className="m-list-timeline__text">System shutdown</a>
                                            <span className="m-list-timeline__time">11 mins</span>
                                          </div>
                                          <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state1-info" />
                                            <a href="" className="m-list-timeline__text">Production server down</a>
                                            <span className="m-list-timeline__time">3 hrs</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                                    <div className="m-stack m-stack--ver m-stack--general" style={{ minHeight: 180 }}>
                                      <div className="m-stack__item m-stack__item--center m-stack__item--middle">
                                        <span>All caught up!
                                          <br />No new logs.
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                        <a href="#" className="m-nav__link m-dropdown__toggle">
                          <span className="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide" />
                          <span className="m-nav__link-icon">
                            <i className="flaticon-share" />
                          </span>
                        </a>
                        <div className="m-dropdown__wrapper">
                          <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                          <div className="m-dropdown__inner">
                            <div className="m-dropdown__header m--align-center" style={{ background: 'url(../../../assets/app/media/img/misc/quick_actions_bg.jpg)', backgroundSize: 'cover' }}>
                              <span className="m-dropdown__header-title">Quick Actions</span>
                              <span className="m-dropdown__header-subtitle">Shortcuts</span>
                            </div>
                            <div className="m-dropdown__body m-dropdown__body--paddingless">
                              <div className="m-dropdown__content">
                                <div className="data" data="false" data-height={380} data-mobile-height={200}>
                                  <div className="m-nav-grid m-nav-grid--skin-light">
                                    <div className="m-nav-grid__row">
                                      <a href="#" className="m-nav-grid__item">
                                        <i className="m-nav-grid__icon flaticon-file" />
                                        <span className="m-nav-grid__text">Generate Report</span>
                                      </a>
                                      <a href="#" className="m-nav-grid__item">
                                        <i className="m-nav-grid__icon flaticon-time" />
                                        <span className="m-nav-grid__text">Add New Event</span>
                                      </a>
                                    </div>
                                    <div className="m-nav-grid__row">
                                      <a href="#" className="m-nav-grid__item">
                                        <i className="m-nav-grid__icon flaticon-folder" />
                                        <span className="m-nav-grid__text">Create New Task</span>
                                      </a>
                                      <a href="#" className="m-nav-grid__item">
                                        <i className="m-nav-grid__icon flaticon-clipboard" />
                                        <span className="m-nav-grid__text">Completed Tasks</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                        <a href="#" className="m-nav__link m-dropdown__toggle">
                          <span className="m-topbar__userpic">
                            <img src={user4} className="m--img-rounded m--marginless" alt="" />
                          </span>
                          <span className="m-topbar__username m--hide">Nick</span>
                        </a>
                        <div className="m-dropdown__wrapper">
                          <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                          <div className="m-dropdown__inner">
                            <div className="m-dropdown__header m--align-center" style={{ background: 'url(../../../assets/app/media/img/misc/user_profile_bg.jpg)', backgroundSize: 'cover' }}>
                              <div className="m-card-user m-card-user--skin-dark">
                                <div className="m-card-user__pic">
                                  <img src={user4} className="m--img-rounded m--marginless" alt="" />
                                </div>
                                <div className="m-card-user__details">
                                  <span className="m-card-user__name m--font-weight-500">Mark Andre</span>
                                  <a href="" className="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com</a>
                                </div>
                              </div>
                            </div>
                            <div className="m-dropdown__body">
                              <div className="m-dropdown__content">
                                <ul className="m-nav m-nav--skin-light">
                                  <li className="m-nav__section m--hide">
                                    <span className="m-nav__section-text">Section</span>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="../../../header/profile.html" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-profile-1" />
                                      <span className="m-nav__link-title">
                                        <span className="m-nav__link-wrap">
                                          <span className="m-nav__link-text">My Profile</span>
                                          <span className="m-nav__link-badge">
                                            <span className="m-badge m-badge--success">2</span>
                                          </span>
                                        </span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="../../../header/profile.html" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-share" />
                                      <span className="m-nav__link-text">Activity</span>
                                    </a>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="../../../header/profile.html" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-chat-1" />
                                      <span className="m-nav__link-text">Messages</span>
                                    </a>
                                  </li>
                                  <li className="m-nav__separator m-nav__separator--fit" />
                                  <li className="m-nav__item">
                                    <a href="../../../header/profile.html" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-info" />
                                      <span className="m-nav__link-text">FAQ</span>
                                    </a>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="../../../header/profile.html" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-lifebuoy" />
                                      <span className="m-nav__link-text">Support</span>
                                    </a>
                                  </li>
                                  <li className="m-nav__separator m-nav__separator--fit" />
                                  <li className="m-nav__item">
                                    <a href="../../../snippets/pages/user/login-1.html" className="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li id="m_quick_sidebar_toggle" className="m-nav__item">
                        <a href="#" className="m-nav__link m-dropdown__toggle">
                          <span className="m-nav__link-icon">
                            <i className="flaticon-grid-menu" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* END: Topbar */}
              </div>
            </div>
          </div>
        </header>
        {/* END: Header */}
        {/* begin::Body */}
        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
          {/* BEGIN: Left Aside */}
          <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
            <i className="la la-close" />
          </button>
          <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
            {/* BEGIN: Aside Menu */}
            <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical={1} m-menu-scrollable={1} m-menu-dropdown-timeout={500} style={{ position: 'relative' }}>
              <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                <li className="m-menu__item " aria-haspopup="true">
                  <a href="../../../index.html" className="m-menu__link ">
                    <i className="m-menu__link-icon flaticon-line-graph" />
                    <span className="m-menu__link-title">
                      <span className="m-menu__link-wrap">
                        <span className="m-menu__link-text">Dashboard</span>
                        <span className="m-menu__link-badge">
                          <span className="m-badge m-badge--danger">2</span>
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li className="m-menu__section ">
                  <h4 className="m-menu__section-text">Components</h4>
                  <i className="m-menu__section-icon flaticon-more-v3" />
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-layers" />
                    <span className="m-menu__link-text">Base</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Base</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/state.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">State Colors</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/typography.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Typography</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/stack.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Stack</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/tables.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Tables</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/progress.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Progress</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/modal.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Modal</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/alerts.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Alerts</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/popover.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Popover</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/tooltip.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Tooltip</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/blockui.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Block UI</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/spinners.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Spinners</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/scrollable.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Scrollable</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/dropdown.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Dropdown</span>
                        </a>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Tabs</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/base/tabs/bootstrap.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Bootstrap Tabs</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/base/tabs/line.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Line Tabs</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/accordions.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Accordions</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/navs.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Navs</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/lists.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Lists</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/treeview.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Tree View</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/bootstrap-notify.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Bootstrap Notify</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/toastr.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Toastr</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/base/sweetalert2.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">SweetAlert2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-share" />
                    <span className="m-menu__link-text">Icons</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/icons/flaticon.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Flaticon</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/icons/fontawesome5.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Fontawesome 5</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/icons/lineawesome.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Lineawesome</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/icons/socicons.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Socicons</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-multimedia-1" />
                    <span className="m-menu__link-text">Buttons</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Buttons</span>
                        </span>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Button Base</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/buttons/base/default.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Default Style</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/buttons/base/square.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Square Style</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/buttons/base/pill.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Pill Style</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/buttons/base/air.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Air Style</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/buttons/group.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Button Group</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/buttons/dropdown.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Button Dropdown</span>
                        </a>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Button Icon</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/buttons/icon/lineawesome.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Lineawesome Icons</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/buttons/icon/fontawesome.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Fontawesome Icons</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/buttons/icon/flaticon.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Flaticon Icons</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-interface-1" />
                    <span className="m-menu__link-text">Portlets</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Portlets</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/portlets/base.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Base Portlets</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/portlets/advanced.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Advanced Portlets</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/portlets/creative.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Creative Portlets</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/portlets/tabbed.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Tabbed Portlets</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/portlets/draggable.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Draggable Portlets</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/portlets/tools.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Portlet Tools</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/portlets/sticky-head.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Sticky Head</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-interface-6" />
                    <span className="m-menu__link-text">Timeline</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Timeline</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/timeline/timeline-1.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Timeline 1</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/timeline/timeline-2.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Timeline 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-network" />
                    <span className="m-menu__link-text">Widgets</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Widgets</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/widgets/general.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">General Widgets</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/widgets/chart.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Chart Widgets</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-calendar" />
                    <span className="m-menu__link-text">Calendar</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Calendar</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/calendar/basic.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Basic Calendar</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/calendar/list-view.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">List Views</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/calendar/google.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Google Calendar</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/calendar/external-events.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">External Events</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/calendar/background-events.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Background Events</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-diagram" />
                    <span className="m-menu__link-text">Charts</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Charts</span>
                        </span>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">amCharts</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/charts/amcharts/charts.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">amCharts Charts</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/charts/amcharts/stock-charts.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">amCharts Stock Charts</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../components/charts/amcharts/maps.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">amCharts Maps</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/charts/flotcharts.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Flot Charts</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/charts/google-charts.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Google Charts</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/charts/morris-charts.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Morris Charts</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-placeholder-1" />
                    <span className="m-menu__link-text">Maps</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Maps</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/maps/google-maps.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Google Maps</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/maps/jqvmap.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">JQVMap</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-signs-2" />
                    <span className="m-menu__link-text">Utils</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Utils</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/utils/session-timeout.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Session Timeout</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../components/utils/idle-timer.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Idle Timer</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__section ">
                  <h4 className="m-menu__section-text">CRUD</h4>
                  <i className="m-menu__section-icon flaticon-more-v3" />
                </li>
                <li className="m-menu__item  m-menu__item--submenu m-menu__item--open m-menu__item--expanded" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-interface-7" />
                    <span className="m-menu__link-text">Forms &amp; Controls</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Forms &amp; Controls</span>
                        </span>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu m-menu__item--open m-menu__item--expanded" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Controls</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                              <a href="../../../crud/forms/controls/base.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Base Inputs</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/controls/checkbox-radio.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Checkbox &amp; Radio</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/controls/input-group.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Input Groups</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/controls/switch.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Switch</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/controls/option.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Mega Options</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Widgets</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-datepicker.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Datepicker</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-datetimepicker.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Datetimepicker</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-timepicker.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Timepicker</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-daterangepicker.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Daterangepicker</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-touchspin.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Touchspin</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-maxlength.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Maxlength</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-switch.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Switch</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-multipleselectsplitter.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Multiple Select Splitter</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-select.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Bootstrap Select</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/select2.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Select2</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/typeahead.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Typeahead</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/nouislider.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">noUiSlider</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/form-repeater.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Form Repeater</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/ion-range-slider.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Ion Range Slider</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/input-mask.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Input Masks</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/summernote.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Summernote WYSIWYG</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/bootstrap-markdown.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Markdown Editor</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/autosize.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Autosize</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/clipboard.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Clipboard</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/dropzone.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Dropzone</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/widgets/recaptcha.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Google reCaptcha</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Layouts</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/layouts/default-forms.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Default Forms</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/layouts/multi-column-forms.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Multi Column Forms</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/layouts/action-bars.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Basic Action Bars</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/layouts/sticky-action-bar.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Sticky Action Bar</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Validation</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/validation/states.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Validation States</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/validation/form-controls.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Form Controls</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/forms/validation/form-widgets.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Form Widgets</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-interface-8" />
                    <span className="m-menu__link-text">Metronic Wizard</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../crud/wizard/wizard-1.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Wizard 1</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../crud/wizard/wizard-2.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Wizard 2</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../crud/wizard/wizard-3.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Wizard 3</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../crud/wizard/wizard-4.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Wizard 4</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../crud/wizard/wizard-5.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Form Wizard 5</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-tabs" />
                    <span className="m-menu__link-text">Metronic Datatable</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Metronic Datatable</span>
                        </span>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Base</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/data-local.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Local Data</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/data-json.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">JSON Data</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/data-ajax.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Ajax Data</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/html-table.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">HTML Table</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/record-selection.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Record Selection</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/local-sort.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Local Sort</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/row-details.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Row Details</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/column-rendering.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Column Rendering</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/column-width.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Column Width</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/responsive-columns.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Responsive Columns</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/base/translation.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Translation</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Scrolling</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/scrolling/vertical.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Vertical Scrolling</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/scrolling/horizontal.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Horizontal Scrolling</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/scrolling/both.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Both Scrolling</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Locked Columns</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/locked/left.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Left Locked Columns</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/locked/right.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Right Locked Columns</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/locked/both.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Both Locked Columns</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/locked/html-table.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">HTML Table</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Child Datatables</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/child/data-local.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Local Data</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/child/data-ajax.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Remote Data</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">API</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/api/methods.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">API Methods</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/metronic-datatable/api/events.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Events</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-list-3" />
                    <span className="m-menu__link-text">DataTables</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">DataTables</span>
                        </span>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Basic</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/basic/basic.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Basic Tables</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/basic/scrollable.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Scrollable Tables</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/basic/headers.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Complex Headers</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/basic/paginations.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Pagination Options</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Advanced</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/advanced/column-rendering.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Column Rendering</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/advanced/multiple-controls.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Multiple Controls</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/advanced/column-visibility.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Column Visibility</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/advanced/row-callback.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Row Callback</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/advanced/row-grouping.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Row Grouping</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/advanced/footer-callback.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Footer Callback</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Data sources</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/data-sources/html.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">HTML</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/data-sources/javascript.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Javascript</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/data-sources/ajax-client-side.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Ajax Client-side</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/data-sources/ajax-server-side.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Ajax Server-side</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Search Options</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/search-options/column-search.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Column Search</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/search-options/advanced-search.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Advanced Search</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Extensions</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/buttons.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Buttons</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/colreorder.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">ColReorder</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/keytable.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">KeyTable</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/responsive.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Responsive</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/rowgroup.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">RowGroup</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/rowreorder.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">RowReorder</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/scroller.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Scroller</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a href="../../../crud/datatables/extensions/select.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Select</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__section ">
                  <h4 className="m-menu__section-text">Snippets</h4>
                  <i className="m-menu__section-icon flaticon-more-v3" />
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-interface-9" />
                    <span className="m-menu__link-text">Pricing Tables</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Pricing Tables</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../snippets/general/pricing-tables/pricing-table-1.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Pricing Tables v1</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../snippets/general/pricing-tables/pricing-table-2.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Pricing Tables v2</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../snippets/general/pricing-tables/pricing-table-3.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Pricing Tables v3</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../snippets/general/pricing-tables/pricing-table-4.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Pricing Tables v4</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-piggy-bank" />
                    <span className="m-menu__link-text">Invoices</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Invoices</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../snippets/invoices/invoice-1.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Invoice v1</span>
                        </a>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../snippets/invoices/invoice-2.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Invoice v2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-exclamation" />
                    <span className="m-menu__link-text">FAQS</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">FAQS</span>
                        </span>
                      </li>
                      <li className="m-menu__item " aria-haspopup="true">
                        <a href="../../../snippets/faq/faq-1.html" className="m-menu__link ">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">FAQ v1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-suitcase" />
                    <span className="m-menu__link-text">Custom Pages</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                        <span className="m-menu__link">
                          <span className="m-menu__link-text">Custom Pages</span>
                        </span>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">User Pages</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/user/login-1.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Login - 1</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/user/login-2.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Login - 2</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/user/login-3.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Login - 3</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/user/login-4.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Login - 4</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/user/login-5.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Login - 5</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/user/login-6.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Login - 6</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                        <a href="javascript:;" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span />
                          </i>
                          <span className="m-menu__link-text">Error Pages</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu ">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/errors/error-1.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Error 1</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/errors/error-2.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Error 2</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/errors/error-3.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Error 3</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/errors/error-4.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Error 4</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/errors/error-5.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Error 5</span>
                              </a>
                            </li>
                            <li className="m-menu__item " aria-haspopup="true">
                              <a target="_blank" href="../../../snippets/pages/errors/error-6.html" className="m-menu__link ">
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                  <span />
                                </i>
                                <span className="m-menu__link-text">Error 6</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* END: Aside Menu */}
          </div>
          {/* END: Left Aside */}
          <div className="m-grid__item m-grid__item--fluid m-wrapper">
            {/* BEGIN: Subheader */}
            <div className="m-subheader ">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h3 className="m-subheader__title m-subheader__title--separator">Base Controls</h3>
                  <ul className="m-subheader__breadcrumbs m-nav m-nav--inline">
                    <li className="m-nav__item m-nav__item--home">
                      <a href="#" className="m-nav__link m-nav__link--icon">
                        <i className="m-nav__link-icon la la-home" />
                      </a>
                    </li>
                    <li className="m-nav__separator">-</li>
                    <li className="m-nav__item">
                      <a href="" className="m-nav__link">
                        <span className="m-nav__link-text">Forms &amp; Controls</span>
                      </a>
                    </li>
                    <li className="m-nav__separator">-</li>
                    <li className="m-nav__item">
                      <a href="" className="m-nav__link">
                        <span className="m-nav__link-text">Form Controls</span>
                      </a>
                    </li>
                    <li className="m-nav__separator">-</li>
                    <li className="m-nav__item">
                      <a href="" className="m-nav__link">
                        <span className="m-nav__link-text">Base Inputs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
                    <a href="#" className="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
                      <i className="la la-plus m--hide" />
                      <i className="la la-ellipsis-h" />
                    </a>
                    <div className="m-dropdown__wrapper">
                      <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                      <div className="m-dropdown__inner">
                        <div className="m-dropdown__body">
                          <div className="m-dropdown__content">
                            <ul className="m-nav">
                              <li className="m-nav__section m-nav__section--first m--hide">
                                <span className="m-nav__section-text">Quick Actions</span>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-share" />
                                  <span className="m-nav__link-text">Activity</span>
                                </a>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-chat-1" />
                                  <span className="m-nav__link-text">Messages</span>
                                </a>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-info" />
                                  <span className="m-nav__link-text">FAQ</span>
                                </a>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-lifebuoy" />
                                  <span className="m-nav__link-text">Support</span>
                                </a>
                              </li>
                              <li className="m-nav__separator m-nav__separator--fit" />
                              <li className="m-nav__item">
                                <a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">Submit</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Subheader */}
            <div className="m-content">
              <div className="row">
                <div className="col-md-12">
                  {/* begin::Portlet */}
                  <div className="m-portlet m-portlet--tab">
                    <div className="m-portlet__head">
                      <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-title">
                          <span className="m-portlet__head-icon m--hide">
                            <i className="la la-gear" />
                          </span>
                          <h3 className="m-portlet__head-text">
                            Square Input Style
                          </h3>
                        </div>
                      </div>
                    </div>
                    {/* begin::Form */}
                    <form className="m-form m-form--fit m-form--label-align-right">
                      <div className="m-portlet__body">
                        <div className="form-group m-form__group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control m-input m-input--square" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <span className="m-form__help">We'll never share your email with anyone else.</span>
                        </div>
                        <div className="form-group m-form__group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group m-form__group">
                          <label htmlFor="exampleSelect1">Example select</label>
                          <select className="form-control m-input m-input--square" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="m-portlet__foot m-portlet__foot--fit">
                        <div className="m-form__actions">
                          <button type="reset" className="btn btn-metal">Submit</button>
                          <button type="reset" className="btn btn-secondary">Cancel</button>
                        </div>
                      </div>
                    </form>
                    {/* end::Form */}
                  </div>
                  {/* end::Portlet */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end:: Body */}
        {/* begin::Footer */}
        <footer className="m-grid__item		m-footer ">
          <div className="m-container m-container--fluid m-container--full-height m-page__container">
            <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
              <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                <span className="m-footer__copyright">
                  2017 © Metronic theme by
                  <a href="https://keenthemes.com" className="m-link">Keenthemes</a>
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
        {/* end::Footer */}
      </div>
    )

    // return (
    //   (
    //     <div>
    //       <h1>Profile</h1>
    //       <ul>
    //         <li>ID: {id}</li>
    //         <li>email: {email}</li>
    //         <li>verified: {verified ? 'yes' : 'no'}</li>
    //         <li>first name: {firstName}</li>
    //         <li>last name: {lastName}</li>
    //         <li>token: {token}</li>
    //       </ul>
    //     </div>
    //   )
    // )
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
