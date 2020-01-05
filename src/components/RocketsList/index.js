import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {
  MDBDataTable, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle
} from 'mdbreact'
import Loader from '../Loader'

const HookDatatable = (props) => {
  const [data, setData] = useState(props.data)
  useEffect(() => {
    setData(props.data)
  }, [props.data])
  return (

    <div className='container'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>List of Upcomings Launch</MDBCardTitle>
          <MDBDataTable
            striped
            bordered
            small
            data={data}
          />
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

class RocketsList extends React.Component {
  state = {
    dataconf: {
      columns: [{
        label: 'ID',
        field: 'id',
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
        field: 'detail',
        sort: 'asc',
        width: 50
      }],
      rows: []
    }
  }

  componentDidMount () {
    this.props.getAllRockets()
  }

  render () {
    // eslint-disable-next-line no-return-assign
    this.props.rockets.items.map((rocket) => (
      // eslint-disable-next-line no-sequences
      rocket.detail = (<NavLink to={`/rockets/${rocket.id}`}><MDBBtn rounded gradient='blue' size='sm'><i className='fas fa-info-circle' /></MDBBtn></NavLink>),
      this.state.dataconf.rows.push(rocket)
    ))

    return (
      <div>
        {this.props.rockets.isFetching ? <Loader /> : <HookDatatable data={this.state.dataconf} />}
      </div>
    )
  }
}

RocketsList.propTypes = {
  getAllRockets: PropTypes.func.isRequired,
  rockets: PropTypes.object.isRequired
}
HookDatatable.propTypes = {
  data: PropTypes.object.isRequired
}
export default RocketsList
