import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RocketsListContainer from '../../containers/RocketsListContainer'
import RocketDetailsContainer from '../../containers/RocketDetailsContainer'

const Rockets = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/rockets' component={RocketsListContainer} />
        <Route path='/rockets/:id' component={RocketDetailsContainer} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default Rockets
