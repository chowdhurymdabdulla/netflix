const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Detail = require('./Detail')
const Searches = require('./Searches')
const { Router, Route, hashHistory, indexRoute } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <indexRoute path='/' component={Landing} />
    <Route path='/search' component={Searches} />
    <Route path='/search/:id' component={Searches} />
    <Route path='/detail:id' component={Detail} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
