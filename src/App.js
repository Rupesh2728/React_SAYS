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




function App() {
  return (
    
    <>
    <BrowserRouter>

    
      {/* <Home/> */}
      {/* <Register action="/Signup" method="post" type="user"/> */}
      {/* <Login client="user"/> */}
      {/* <Movies/> */}
      {/* <IndividualPage/> */}
      {/* <SnacksPage/> */}
      {/* <UserProfilePage/> */}
      {/* <UserProfileEditPage/> */}
      {/* <SeatArrangementPage/> */}

      {/* <HomePage/> */}
      {/* <UserPage/> */}
      {/* <TheatrePage/> */}
      {/* <MailPage/> */}
      <MoviesPage/>
    </BrowserRouter>
       {/* <RouterProvider router={router}/> */}
    </>
  );
}

export default App;
