
import LaptopNavBar from '../NavBar/LaptopNavBar/LaptopNavBar';
import MobileNavBar from '../NavBar/MobileNavBar/MobileNavBar';
import classes from './NavBar.module.css';

const NavBar=({firstsection:FirstSection,pagename})=>{
    return (
        <>       
         <div className={classes.laptopNavBar}>
           <LaptopNavBar pagename={pagename}/>
        </div>
        <div className={classes.mobileNavBar}>
          <MobileNavBar firstsection={FirstSection} pagename={pagename}/>
        </div>

        <div className={classes.slidenavbar}>
          <MobileNavBar firstsection={FirstSection} pagename={pagename}/>
        </div>

        </>
    );
}

export default NavBar;