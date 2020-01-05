/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import PropTypes from 'prop-types'
import {
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader, MDBContainer
} from 'mdbreact'
import Countdown from 'react-countdown-now'
import Loader from '../Loader'

// const initRocketState = [];
const PrettyPrintJson = ({ data }) => (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>)
PrettyPrintJson.propTypes = {
  data: PropTypes.object.isRequired
}

class RocketsDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editMode: false,
      rocketId: this.props.match.params.id,
      collapseID: ''
    }
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }))
  }

  render () {
    const rocket = this.props.rockets.items.find((item) => item.id === this.state.rocketId)
    rocket.detail = null
    const dateLaunch = new Date(rocket.window_start)
    // console.log(d) // Hours
    let aboutRocket
    if (rocket) {
      aboutRocket = this.state.editMode ? (
        <h1>Edit Component on development</h1>
      )
        : (
          <MDBContainer fluid className='d-flex justify-content-center'>
            <MDBCard
              style={{ width: '22rem', marginBottom: '2rem' }}
              className='mr-4'
            >
              <MDBCardHeader color='deep-orange lighten-1'>Rocket info</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>{rocket.name}</MDBCardTitle>
                <div data-test='card-text' className='card-text'>
                  <h1><Countdown date={dateLaunch} /></h1>
                  <hr />
                  <div>Start: {rocket.window_start}</div>
                  <div>End: {rocket.window_end}</div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard style={{ width: '22rem' }}>
              <MDBCardHeader color='success-color'>All info</MDBCardHeader>
              <MDBCardBody>
                <div data-test='card-text' className='card-text'>
                  <PrettyPrintJson data={rocket} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        )
    }

    return (
      <div className='about-rocket-page'>
        <MDBCard>
          <MDBCardBody>
            {this.props.rockets.isFetching ? <Loader /> : aboutRocket}
          </MDBCardBody>
        </MDBCard>
      </div>
    )
  }
}

RocketsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  getRocket: PropTypes.func.isRequired,
  rockets: PropTypes.object.isRequired
}

export default RocketsDetails
