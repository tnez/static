import React from 'react'
import { Router, Link } from 'react-static'

import Routes from 'react-static-routes'

export default () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
