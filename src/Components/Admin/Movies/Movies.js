import React, { useState } from 'react';
import AdminNav from '../../Common/Admin/Navbar/AdminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from './Movies.module.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { RemoveModal } from './RemoveMovies/RemoveModal';
import AddMovies from './AddMovies/AddMovies';
import MovieInfo from './MovieInfo/MovieInfo';


export const Movies = () => {

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  
  
  return (
    <div className={classes.body}>   
    {show1 && <RemoveModal show={show1} handleClose={handleClose1}/>}
    {show2 && <AddMovies show={show2} handleClose={handleClose2}/>}
    {show3 && <MovieInfo show={show3} handleClose={handleClose3}/>}

    <AdminNav signout={false}/>
    <div className='mt-[2rem]'>
     <div className='flex justify-between'>
     <div className='flex'>
      <label for="location" className='text-[white] text-[1.2rem] mt-1'>Location:</label>

      <Dropdown className='text-white bg-[#221f1f] border-none ml-2'>
      <Dropdown.Toggle className='text-white bg-[#221f1f] border-none'>
        Vijayawada
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Vijayawada</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Guntur</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sricity</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     </div>

     <button type="button" className={classes.addbtn} onClick={handleShow2}>
      Add Movie
    </button>
     </div>

      
      <div className='flex justify-between mt-[2.5rem]'>
        <h3 className={classes.title}>RENTAL MOVIES</h3>
          <button type="button" className={classes.addbtn} onClick={handleShow1}>
             Remove Movie
          </button>    
      </div>
      
        <Row>
        <div className="flex">
              <Col lg={2} md={2}>
                <div className={classes.movie_card}>
                  <img src='https://pbs.twimg.com/profile_images/1723579743361179648/8XbD-Xvd_400x400.jpg' alt=''/>
                  <div className={classes.movie_info}>
                    <p className={classes.movie_name}>Salaar : The caese fire part-1</p>
                  </div>
                  <div className={classes.card_bottom}>
                      <div>
                        <button className="rounded-[50%] w-[2rem] bg-[#221f1f] border-0" type="button" onClick={handleShow3}>
                          <FontAwesomeIcon icon={faInfoCircle} className='text-[indianred] text-[1.5rem]'/>
                       </button>
                      </div>
                   </div>
               </div>
             </Col>
               
      </div>

        </Row>
       

    </div> 
    </div>
  )
}
