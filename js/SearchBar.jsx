const React = require('react')

class SearchBar extends React.Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props._onSubmit} >
          < input className='search' type='text'
            placeholder='Search'
            onChange={this.props._onSearch}
          / >
        </form>
      </div>
)
  }
}

SearchBar.propTypes = {
  _onSearch: React.PropTypes.func,
  _onSubmit: React.PropTypes.func
}

module.exports = SearchBar
