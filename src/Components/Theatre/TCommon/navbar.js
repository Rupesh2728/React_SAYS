
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
function TNavbar() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <Navbar expand="lg" className="bg-[#221f1f] text-[1.3rem] ">

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto">
        <Nav.Link href="#home" style={{ color: 'gold' }}>
          Home
        </Nav.Link>
        <Nav.Link href="#link" style={{ color: 'gold' }}>
          Movies
        </Nav.Link>
        <Nav.Link href="#link" style={{ color: 'gold' }}>
          Snacks
        </Nav.Link>
        <Nav.Link href="#link" style={{ color: 'gold' }}>
          Theatre
        </Nav.Link>
        <Nav.Link href="#link" style={{ color: 'gold' }}>
          About Theatre
        </Nav.Link>

      </Nav>

      <div className='mr-[4rem]' style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://sambadenglish.com/wp-content/uploads/2021/03/s3.jpg"
          alt=""
          style={{ borderRadius: '50%', width: '2.5rem', height: '2.5rem', border: '1.5px solid gold', marginRight: '1rem', cursor: 'pointer' }}
          onClick={handleDropdownToggle}
        />
        <NavDropdown show={dropdownOpen} onToggle={handleDropdownToggle} id="basic-nav-dropdown" className="text-[gold] mr-[6rem]">
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </div>

    </Navbar.Collapse>



  </Navbar>
  )
}

export default TNavbar;
