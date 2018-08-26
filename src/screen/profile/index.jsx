import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAuth } from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'
import TopNav from '../components/topNav'
import Footer from '../components/footer'

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
})

export default
withRouter(
  connect(
    mapStateToProps,
    actions,
  )(ProfileScreen),
)
