import React from 'react';
import axios from 'axios';
import {CONFIG} from '../constants';
import { MDBDataTable, MDBBtn } from 'mdbreact';


export default class UpcomingList extends React.Component {
  state = {
    upcomings: [],
    colums: [
          {
            label: 'Image',
            field: 'img_url',
            sort: 'asc',
            width: 50
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Action',
            field: 'handle',
            sort: 'asc',
            width: 50
          }
          
        ],
    rows:[]
  }

  componentDidMount() {
    axios.get(
        CONFIG.API_ENDPOINT+'upcoming?limit=100'
    )
      .then(res => {
        
        res.data.results.map(up=>
            {
                this.state.rows.push({
                    "id":up.id,
                    "img_url":up.img_url,
                    "name":up.name,
                    'handle': <a href={"/upcomings/info/"+up.id}>
                      <MDBBtn color="info" size="sm">
                        <i class="fas fa-info-circle"></i>
                      </MDBBtn>
                      </a>
                });            
            });

        this.setState({ upcomings:this.state.rows });
      }).catch(err=>{
          console.log(err);
      })
  }

  render() {
    const data = {
        columns:this.state.colums,
        rows:this.state.rows
    }
    return (
      <div className="container">    
        <h1>List</h1>   
        <hr></hr>   
        <MDBDataTable
            striped
            bordered
            small
            data={data}
            />
          
      </div>
    )
  }
}
