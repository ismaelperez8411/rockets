import React, { Component } from 'react';

class Home extends Component {
  state: any = {};
  constructor(props: any) {
    super(props);
    this.state = { };
  }
  componentDidMount() {    
  }

  
  render() {
    return (
      <div className="container">
        <div className="App-header">
        <h1>
          See the list at the top menu or just click at
          <a href="/upcomings" >(Upcoming Rockets List)</a>
        </h1>
        </div>
      </div>
    )
  }
}

export default Home;