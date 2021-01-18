import React, { NavLink } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' CollapseOnSelect>
        {/* <NavLink exact to='/'> */}
        <Navbar.Brand href='/'>
          <img
            src='./img/logo_18.svg'
            width='40'
            height='40'
            className='d-inline-block align-top'
            alt=''
          />
        </Navbar.Brand>
        {/* </NavLink> */}

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/Aboutus'>
              About us <i className='fas fa-info'></i>
            </Nav.Link>
            <Nav.Link href='/signout'>
              Log out <i className='fas fa-sign-out-alt'></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
