import React from 'react';
import classes from './Individual.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';

const Individual = () => {
  return (
    <div className='bg-[url("https://imgeng.jagran.com/images/2023/jan/Avatar-21673432921665.jpg")] bg-no-repeat bg-cover'>
      <Row className='backdrop-blur-[12px]'>
        <Col>
           <div className={classes.poster}>
             <img src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
          </div>
        </Col>
      
       <Col>
       <div className={classes.info}>
        <div className={classes.movie_title}>Avatar</div>
        <div className={classes.movie_detail}>
          <div className={classes.set}>
            <label>Release Date</label>
            <span> 16th Dec 2022 </span>
          </div>
          <div className={classes.set}>
            <label>Running Time</label>
            <span> 2h 30min </span>
          </div>
          <div className={classes.set}>
            <label>Genre</label>
            <span> Sci-fi </span>
          </div>
        </div>


        <div className={classes.movie_description}>Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.</div>
        <div className={classes.movie_cast}>
          <div className={classes.header}>Cast and Crew</div>
          <Row className='mt-0'>
          <div className={classes.list}>
          <Col lg={3} md={4} className='mt-0'>
          <div className={classes.cast}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg/220px-Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg" alt="" />
             <label> Sam Worthington </label>
          </div>
          </Col>

          <Col lg={3} md={4} className='mt-0'>
          <div className={classes.cast}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg/220px-Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg" alt="" />
             <label> Sam Worthington </label>
           </div>
          </Col>

          <Col lg={3} md={4} className='mt-0'>
          <div className={classes.cast}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg/220px-Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg" alt="" />
             <label> Sam Worthington </label>
           </div>
          </Col>

          <Col lg={3} md={4} className='mt-0'>
          <div className={classes.cast}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg/220px-Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg" alt="" />
             <label> Sam Worthington </label>
           </div>
          </Col>
          
         </div>

          </Row>
          
        </div>

        <div className='m-0'>
          <a href="/movies/timings?name=<%=movieobj['MovieName']%>&city=<%=location%>"
            ><button className={classes.bookbtn}>Book</button></a
          >
        </div>
      </div>
       
       
       </Col>
      

      </Row>
     
    </div>
  
  )
}

export default Individual