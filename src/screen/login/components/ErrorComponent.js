import React from 'react'
import PropTypes from 'prop-types'

class ErrorComponent extends React.Component {
  render() {
    const { message, onRetry } = this.props
    return (
      <div>
        <p>{ message }</p>
        <button onClick={onRetry}>Retry</button>
      </div>
    )
  }
}

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
}
export default ErrorComponent
