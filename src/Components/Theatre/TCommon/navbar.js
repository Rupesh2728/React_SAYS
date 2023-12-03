
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
        <Link to='/Theatre/Theatredashboard' className='mt-2 ml-2'  style={{ color: 'gold' }}>
          Home
        </Link>
        <Link to='/Theatre/MoviesPage' className='mt-2 ml-2'  style={{ color: 'gold' }}>
        Movies  
        </Link>
        <Link to='/' className='mt-2 ml-2'  style={{ color: 'gold' }}>
        Snacks
        </Link>
        <Link to='/Theatre/TSchedule' className='mt-2 ml-2'  style={{ color: 'gold' }}>
        Theatre
        </Link>
        <Link to='/Theatre/Usertheatreinfo' className='mt-2 ml-2'  style={{ color: 'gold' }}>
        About Theatre
        </Link>

        
      <Link to="/User/MoviesPage" style={{ color: 'gold' }}>
              sdfsd</Link>

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
