import {BrowserRouter} from 'react-router-dom';

import Login from "./Pages/Login/Login";

import HomePage from './Pages/Admin/Home';
import UserPage from './Pages/Admin/User';
import TheatrePage from './Pages/Admin/Theatre';
import MailPage from './Pages/Admin/Mail';
import MoviesPage from './Pages/Admin/Movies';


import UserProfilePage from "./Pages/UserProfile/UserProfile";
import UserProfileEditPage from './Pages/UserProfile/UserProfileEdit';
import SnacksPage from "./Pages/Snacks/SnacksPage";
import Register from "./Pages/Register/Register";
import Home from './Pages/Home/Home';
import Movies from "./Pages/Movies/Movies";
import IndividualPage from './Pages/IndividualMoviePage/Individual';
import SeatArrangementPage from "./Pages/SeatArrangement/SeatArrangement";


// import Footer from "./Components/Common/Footer/Footer";
// import NavBAR from "./Components/Common/LaptopNavBar/Navbar";
// import Register from "./Pages/Register/Register";
// <Register type="theatre" action="/SignUp" method="post"/>


function App() {
  return ( 
  <>
   <Home/>
    {/* <Movies/> */}
  </>
  );
}

export default App;
