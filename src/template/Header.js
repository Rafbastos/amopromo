import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/img/logo-amopromo.png'

const Header  = () => {

    return (
      
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#"><img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
      /></Navbar.Brand>
        </Navbar>
      
    );
}


export default Header;