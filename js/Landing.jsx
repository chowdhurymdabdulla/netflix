const React = require('react')
const { Link, hashHistory } = require('react-router')
const SearchBar = require('./SearchBar')

class Landing extends React.Component {
  constructor () {
    super()
    this.state = {searchz: ''
} // this.state end
    this._onSubmit = this
      ._onSubmit
      .bind(this)
    this._onSearch = this
      ._onSearch
      .bind(this)
  } // constructor end

  _onSubmit (event) {
    event.preventDefault()
    var nag = '/search/' + this.state.searchz
    hashHistory.push(nag)
  } // _onSubmit end

  _onSearch (event) {
    this.setState({searchz: event.target.value})
  }

  render () {
    return (
      <div className='app-container'>
        <div className='home-info'>
          <h1 className='title'>jsssvideo</h1>
          <SearchBar _onSearch={this._onSearch} _onSubmit={this._onSubmit} />
          <Link to='/search' className='browse-all'> or Browse All</Link>
        </div>
      </div>
)
  }

}

module.exports = Landing
