import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import Root from './Root'
import store from './configureStore'
import '../statics/theme/metronic/default/dist/default/assets/vendors/base/vendors.bundle.css'
import '../statics/theme/metronic/default/dist/default/assets/demo/default/base/style.bundle.css'

const { API_ENDPOINT } = process.env

WebFont.load({
  google: {
    families: [
      'Poppins:300,400,500,600,700',
      'Roboto:300,400,500,600,700',
    ],
  },
  active() {
    sessionStorage.fonts = true
  },
})

if (process.env.NODE_ENV === 'development') {
  console.info(`connecting to api endpoint '${API_ENDPOINT}'`)
}

ReactDOM.render(<Root store={store} />, document.getElementById('app'))
