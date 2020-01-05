import React from 'react'
import './App.css'
/* import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/navigation';
import Home from './components/Home';
//import Footer from './components/footer';
//import HookList from './upcoming/list';
//import InfoUpcoming from './upcoming/info';

import RocketsListContainer from './containers/RocketsListContainer';
import RocketDetailsContainer from './containers/RocketDetailsContainer'; */

import Header from './components/Header'
import Main from './components/Main'

function App () {
  return (
    <div className='app-container'>
      <Header />
      <Main />
    </div>
  )
}

export default App
