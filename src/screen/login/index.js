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
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            Welcome
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            Username:
          </Col>
          <Col xs={12} md={10}>
            <input type="text" />
          </Col>
          <Col xs={12} md={2}>
            Password:
          </Col>
          <Col xs={12} md={10}>
            <input type="password" />
          </Col>
        </Row>
      </Grid>
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
