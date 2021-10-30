

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/pages/Navbar/Navbars';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
 import AddAdventures from './components/pages/AddAdventures/AddAdventures';
 import AuthProvider from "./components/AuthProvider/AuthProvider";
import NotFound from "./components/pages/NotFound/NotFound";
import Adventures from "./components/pages/AllAdventures/Adventures";
import AdventuresBooking from "./components/pages/AllAdventures/AdventuresBooking";
import Profile from "./components/pages/Profile/Profile";
import Admin from "./components/pages/Admin/Admin";
import PrivateRoute from "./components/pages/Navbar/PrivateRoute";
function App() {
  return (
   <AuthProvider>
      <Router>
    <div>
      <Navbar></Navbar>
      
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/Login">
             <Login /> 
          </Route>
          <Route path="/Register">
             <Register /> 
         </Route>
          <PrivateRoute  path="/AddAdventures">
             <AddAdventures /> 
         </PrivateRoute>
          <PrivateRoute path="/Adventures">
             <Adventures /> 
         </PrivateRoute>
          <PrivateRoute path="/Profile">
             <Profile /> 
         </PrivateRoute>
         <PrivateRoute path="/AdventuresBooking/:bookingid">
             <AdventuresBooking /> 
          </PrivateRoute>
         <PrivateRoute path="/Admin">
             <Admin /> 
          </PrivateRoute>
          
         
          <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  </Router>
   </AuthProvider>
  );
}

export default App;
