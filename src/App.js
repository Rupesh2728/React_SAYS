//  import Login from "./Pages/Login/Login";

// Should make responsive login page scrollable.
// Should add calender and add location to slidebar menu. 

// import MNavBar from "./Components/Common/MobileNavBar/MNavBar";
// import MainNavBar from "./Components/Common/NavBar/NavBar";
import Home from "./Pages/Home/Home";

import Movies from "./Pages/Movies/Movies";

// import Footer from "./Components/Common/Footer/Footer";
// import NavBAR from "./Components/Common/LaptopNavBar/Navbar";
// import Register from "./Pages/Register/Register";
// <Register type="theatre" action="/SignUp" method="post"/>
import Theatre from "./Components/Theatre/theatredashboard/theatredashboard.js";
import Usertheatreinfo from "./Components/Theatre/About Theatre/usertheatreinfo.js";
import ProfilePage from "./Components/Theatre/Profile/ProfilePage.js";

function App() {
  return ( 
  <>
  {/* <ProfilePage/> */}
{/* <Usertheatreinfo/> */}
  <Theatre/>
  
   {/* <Home/> */}
    {/* <Movies/> */}
  </>
  );
}

export default App;
