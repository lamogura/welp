/* global __GAPI_KEY__ */

import React, { PropTypes, Component } from 'react'
import Map, { GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from 'utils/googleApiHelpers'

export class Container extends Component {
  static propTypes = {
    google: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      places: [],
      pagination: null,
    }
  }

  _onReady = (mapProps, map) => {
    console.debug('google maps ready')
    const { google } = this.props
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe'],
    }

    searchNearby(google, map, opts)
      .then((results, pagination) => {
        console.log(results, pagination)
        this.setState({
          places: results,
          pagination
        })
      })
      .catch((status, result) => {
        console.error(status, result)
      })
  }

  render () {
    return (
      <div>
        Hello from the container
        <Map
          google={this.props.google}
          onReady={this._onReady}
          visible={false}
        >
          {this.state.places.map(place => {
            return <div key={place.id}>{place.name}</div>
          })}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
