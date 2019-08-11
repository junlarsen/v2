import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './views/homepage/App'
import 'normalize.css/normalize.css'
import './App.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
