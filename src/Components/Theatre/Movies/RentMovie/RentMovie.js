import React from 'react';
import classes from './RentMovie.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
// import Dropdown from 'react-bootstrap/Dropdown';

import { useForm } from 'react-hook-form';


export const RentMovie = ({rentMovieHandler,rentedMovies,show,handleClose}) => {
    

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    
    rentMovieHandler(data);
     
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-[#212f1f] text-[gold]'>
           <Modal.Title>Rental Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-[lightgoldenrodyellow]'>
        <form className='font-semibold' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="movie_title">Movie Title:</label>
      <input {...register('MovieName')} className={classes.text} type='text' value={rentedMovies.MovieName} required readOnly />

      <label htmlFor="customer_name">Theatre Name:</label>
      <input {...register('tname')} className={classes.text} type='text' value="STBL" required readOnly />

      <label htmlFor="customer_email">Theatre Mail:</label>
      <input {...register('temail')} className={classes.email} type='email' value="STBL" required readOnly />

      <label htmlFor="rental_days">Rental Days:</label>
      <input {...register('rentaldays')} className={classes.number} type='number' min="1" max="30" required />

      <label htmlFor="rental_date">Rental Date:</label>
      <input {...register('rentaldate')} className={classes.date} type='date' required />

      <button className='border-0 bg-[#4CAF50] text-white rounded-[4px] w-[5.5rem] h-[2.5rem] hover:bg-[#3e8e41]' type="submit">Rent</button>
    </form>

        </Modal.Body>
        <Modal.Footer>
        <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5.5rem] h-[2.5rem]' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}