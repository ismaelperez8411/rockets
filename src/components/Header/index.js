/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-handler-names */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
  MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBIcon, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact'

export const NavItem = (props) => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? 'nav-item active' : 'nav-item'
  const aClassName = props.disabled ? 'nav-link disabled' : 'nav-link'
  return (
    <div className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className='sr-only'>(current)</span>) : ''}
      </a>
    </div>
  )
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.any
}

class Header extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = (collapseID) => () => this.setState((prevState) => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ''
  }));

  render () {
    return (
      <MDBNavbar
        color='info-color'
        dark
        expand='md'
        scrolling
        className='fixed-top'
      >
        <MDBContainer>
          <MDBNavbarBrand>
            <MDBIcon icon='rocket' />
            <strong className='white-text'> RocketProyect</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse('navbarCollapse')}
          />
          <MDBCollapse id='navbarCollapse' isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <NavItem path='/' name='Home' />
              </MDBNavItem>
              <MDBNavItem>
                <NavItem path='/rockets' name='Upcoming Rockets List' />
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className='md-form my-0'>
                    <input
                      className='form-control mr-sm-2'
                      type='text'
                      placeholder='Search'
                      aria-label='Search'
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon='user' className='mr-1' />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className='dropdown-default' right>
                    <MDBDropdownItem href='#!'>My account</MDBDropdownItem>
                    <MDBDropdownItem href='#!'>Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default Header
