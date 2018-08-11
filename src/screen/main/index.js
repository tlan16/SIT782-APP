import React from 'react'
import Column from './components/Column'
import ErrorComponent from './components/ErrorComponent'
import { Grid, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
  getSavedProperties,
  getResultsProperties,
  getIsFetching,
  getErrorMessage,
} from '../../store/properties/reducer'
import * as actions from '../../store/properties/actions'

class MainScreen extends React.Component {
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    const { fetchSearchResponse } = this.props
    fetchSearchResponse()
  }
  render() {
    const {
      saved, results, isFetching, errorMessage,
    } = this.props
    if (isFetching) return (<p>is fetching ...</p>)
    if (errorMessage) return (<ErrorComponent message={errorMessage} onRetry={() => this.fetchData()} />)
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            Results
          </Col>
          <Col xs={6} md={4}>
            Saved Properties
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Column ids={results} isAdd />
          </Col>
          <Col xs={6} md={4}>
            <Column ids={saved} isAdd={false} />
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
)(MainScreen)
