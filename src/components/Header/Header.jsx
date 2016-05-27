import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './styles.module.css'

class Header extends Component {

  render () {
    return (
      <div className={styles.topbar}>
        <Link to='/'>
          <h1>Yelp</h1>
          <section>Fullstack.io</section>
        </Link>
      </div>
    )
  }
}

export default Header
