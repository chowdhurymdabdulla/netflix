const React = require('react')
const ShowCard = require('./ShowCard')
const { Link } = require('react-router')
const data = require('../public/data')
// const Detail = require('./Detail')
// let m = this.props.params.id

class Searches extends React.Component {

  render () {
    let filterz = data.shows.filter((show) => {
      if (this.props.params.id) {
        return show.title.toLowerCase().indexOf(this.props.params.id.toLowerCase()) !== -1
      }
      return true
    })
    return <div>
      <Link to='/' className='browse-all'> Home</Link>
      <Link to='/search' className='browse-all'> Browse All</Link>
      <div className='shows'>
    {filterz.map((show) => (
      <ShowCard show={show} key={show.imdbID} />
    ))}
      </div>
    </div>
  }
}
Searches.propTypes = {
  params: React.PropTypes.object
}

module.exports = Searches
