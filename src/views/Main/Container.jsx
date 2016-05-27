/* global __GAPI_KEY__ */

import React, { PropTypes, Component } from 'react'
import Map, { GoogleApiWrapper } from 'google-maps-react'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import { searchNearby } from 'utils/googleApiHelpers'

import styles from './styles.module.css'

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
      <Map
        visible={false}
        className={styles.wrapper}
        google={this.props.google}
        onReady={this._onReady}
      >
        <Header />
        <Sidebar 
          title={'Restaurants'}
          places={this.state.places}
        />
        <div className={styles.content}>
          {this.state.places.map(place => {
            return <div key={place.id}>{place.name}</div>
          })}
        </div>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
