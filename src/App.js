import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import UpcomingList from './upcoming/list';
import Navigation from './components/navigation';
import Home from './components/Home';
//import Footer from './components/footer';
import InfoUpcoming from './upcoming/info';


function App() {
  return (
    <div>      
      <Navigation />      
      {/*<Footer />*/}
      <Router>
          <Switch>
            <Route path="/" component={Home} exact={true} ></Route>
            <Route path="/upcomings" component={UpcomingList} exact={true} ></Route>
            <Route path="/upcomings/info/:id" component={InfoUpcoming} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
