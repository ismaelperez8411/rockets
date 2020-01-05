import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Home'
import Rockets from '../Rockets'

import './index.scss'

const Main = () => (
  <main style={{ marginTop: '50px' }}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rockets' component={Rockets} />
      </Switch>
    </BrowserRouter>
  </main>
)

export default Main
