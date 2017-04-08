const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Searches = require('./Searches')
const { Router, Route, hashHistory, indexRoute } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <indexRoute path='/' component={Landing} />
    <Route path='/search' component={Searches} />
    <Route path='/search/:id' component={Searches} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
