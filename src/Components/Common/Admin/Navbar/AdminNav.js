import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';


const AdminNav = ({signout}) => {
  return (
    <Navbar expand="lg" className="bg-[#221f1f]">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          <Nav.Link href="#home"><span className='text-[gold] text-[1.2rem]'>Home</span></Nav.Link>
          <Nav.Link href="#link"><span className='text-[gold] text-[1.2rem]'>Movies</span></Nav.Link>
          <Nav.Link href="#home"><span className='text-[gold] text-[1.2rem]'>User</span></Nav.Link>
          <Nav.Link href="#link"><span className='text-[gold] text-[1.2rem]'>Theatre</span></Nav.Link>
        </Nav>

        <div className='flex'>
         <Nav.Link href="#home" className='mr-8'>
            <FontAwesomeIcon icon={faEnvelopesBulk} style={{color:"#ffd700",}} className='text-[1.5rem]'/>
          </Nav.Link>
          {signout && 
          <Nav.Link className='mr-6'>
            <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5rem] h-[2rem]'>LogOut</button>
          </Nav.Link>}
         </div>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default AdminNav