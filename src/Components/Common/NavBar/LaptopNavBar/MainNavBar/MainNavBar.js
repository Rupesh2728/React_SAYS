import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './MainNavBar.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProfileDropDown from '../../Profile/ProfileDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';


const MainNavBar=()=>{
    return (<div className={classes.mainnavbar}>
        <Navbar expand="lg" className="border-left-2">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" style={{width:"42vw"}}>
          <Nav>
                <Nav.Link href='/user/home'><span className={classes.navtext}><FontAwesomeIcon icon={faHouseChimney} style={{color: "#ffd700",}} /></span></Nav.Link> 
                <Nav.Link href='/user/movies'><span className={classes.navtext}>Movies</span></Nav.Link>  
                <Nav.Link href='/user/snacks'><span className={classes.navtext}>Snacks</span></Nav.Link>  
                <Nav.Link href='/user/news'><span className={classes.navtext}>News</span></Nav.Link>   
                <Nav.Link href='/user/about'><span className={classes.navtext}>About</span></Nav.Link>
                <Nav.Link href='/user/contactus'><span className={classes.navtext}>ContactUs</span></Nav.Link>
          </Nav>     
      </Navbar.Collapse>

             <ProfileDropDown flag="L"/>
         </Navbar>
  </div>);
}

export default MainNavBar;