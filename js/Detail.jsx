const React = require('react')
const {Link} = require('react-router')
const data = require('../public/data')

class Detail extends React.Component {

  render () {
    let filter = data.shows.filter((show) => {
      if (this.props.params.id) {
        return show.imdbID.toLowerCase().indexOf(this.props.params.id.toLowerCase()) !== -1
      }
      return true
    })
    return (<Link to='/search'>
      <div className='show-card'>
        <img src={`public/img/posters/${filter[0].poster}`} className='show-card-img' />
        <div className='show-card-text'>
          <h3 className='show-card-title'>{filter[0].title}</h3>
          <h4 className='show-card-year'>({filter[0].year})</h4>
          <p className='show-card-description'>{filter[0].description}</p>
        </div>
      </div>
    </Link>
)
  }
}
Detail.propTypes = {
  params: React.PropTypes.object
}

module.exports = Detail
