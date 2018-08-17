import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import store from './configureStore'

const { API_ENDPOINT } = process.env

if (process.env.NODE_ENV === 'development') {
  console.info(`connecting to api endpoint '${API_ENDPOINT}'`)
}

ReactDOM.render(<Root store={store} />, document.getElementById('app'))
