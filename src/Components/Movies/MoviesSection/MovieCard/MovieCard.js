import classes from './MovieCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from "react-router-dom";

const MovieCard=({MovieDetails})=>{
  
   
  const x=useNavigate();

  function onClickHandler(){
    
    
    x(`/User/IndividualPage?MovieDetails=${JSON.stringify(MovieDetails)}`);

  }
  

  return (
  <>

    <div className={classes.card} style={{backgroundImage:`url(${MovieDetails.MovieImageURL})`}}>
               <div className={classes.title}>
                 {MovieDetails.MovieName} 
              </div>
        
        <div className={classes.cardbody}>

              <div className={classes.movie_infos}>

            <div className={classes.movie_info}>
                <span>
                <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ff0000",}} />
                  4.5  
                </span>
            </div>
                         
            <div className={classes.movie_info}>
                <span>
                  <FontAwesomeIcon icon={faClock} style={{color: "#ff0000",}} />
                  2h 40min    
                </span>
            </div>

            <div className={classes.movie_info}>
              <span>HD</span>
            </div>
                         
            <div className={classes.movie_info}>
              <span>
                13+
              </span>
            </div>

          </div>

          <div className={classes.movie_info}>               
             <button type="button" onClick={onClickHandler} className={classes.bookbtn}><p className={classes.btnname}>Book</p></button>  
          </div>
      </div>
    </div>
   
   
  </>);
}

export default MovieCard;
