import React, { Component, PropTypes } from 'react'
import styles from './styles.module.css'

class Sidebar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

export default Sidebar
