const React = require('react')
const {hashHistory} = require('react-router')

class ShowCard extends React.Component {
  constructor () {
    super()
    this._onClick = this._onClick.bind(this)
  }
  _onClick () {
    var newURL = '/detail' + this.props.show.imdbID
    hashHistory.push(newURL)
  }

  render () {
    return (<div className='show-card' onClick={this._onClick} >
      <img src={`public/img/posters/${this.props.show.poster}`} className='show-card-img' />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{this.props.show.title}</h3>
        <h4 className='show-card-year'>({this.props.show.year})</h4>
        <p className='show-card-description'>{this.props.show.description}</p>
      </div>
    </div>
)
  }
}
ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired
}

module.exports = ShowCard
