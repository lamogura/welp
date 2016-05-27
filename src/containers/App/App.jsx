import React, { PropTypes } from 'react'
import { Router } from 'react-router'

import styles from './styles.module.css'

class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  render () {
    const { routes, history } = this.props
    return (
      <div style={{height: '100%'}}>
        <Router routes={routes} history={history} />
      </div>
    )
  }
}

export default App
