import NavBar from "../../Components/Common/NavBar/NavBar";
import FifthSection from "../../Components/Home/FifthSection/FifthSection";
import FirstSection from "../../Components/Home/FirstSection/FirstSection";
import FourthSection from "../../Components/Home/FourthSection/FourthSection";
import classes from './Home.module.css'
import ThirdSection from "../../Components/Home/ThirdSection/ThirdSection";
import Footer from '../../Components/Common/Footer/Footer'
import SecondSection from "../../Components/Home/SecondSection/SecondSection";

const Home=()=>{
    return (<>
      <NavBar firstsection={FirstSection} pagename="Movies"/>
     <div className={classes.laptopfirstsection}>
       <FirstSection/>
     </div>
       <div className={classes.fline}></div>
       <SecondSection/>
       <div className={classes.line}></div>
       <ThirdSection/>
       <div className={classes.line}></div>
       <FourthSection/>
       <FifthSection/>
        <Footer/>
    </>);
}

export default Home;