import React,{Component} from 'react';
import axios from 'axios';
import {CONFIG} from '../constants';

const PrettyPrintJson = ({data}) => (<div><pre>{ 
  JSON.stringify(data, null, 2) }</pre></div>);

export default class InfoUpcoming extends Component {

  constructor(props) {
    super(props);   
    this.state = {  
      launch:[]
     }  
}

componentDidMount() {
  
  const prop=this.props;  
  axios.get(CONFIG.API_ENDPOINT+prop.match.params.id+'?mode=detailed' )
      .then(response => {
          
          this.setState({ 
              launch:response.data
            });
              
      })
      .catch(function (error) {
          console.log(error);
      })
}


  //console.log(props);
  render=()=>{
    console.log(this.state.launch);
  return (
    <div className="container">
      <div>
        <h1>Information</h1>
        <PrettyPrintJson data={this.state.launch} />
      </div>
    </div>     
  )
}
}

