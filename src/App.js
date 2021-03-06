

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
import MyOrders from "./components/pages/MyOrders/MyOrders";
import ManageAllOrders from "./components/pages/ManageAllOrders/ManageAllOrders";
import PrivateRoute from "./components/pages/Navbar/PrivateRoute";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/pages/Footer/Footer";



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
        <Route path="/About">
          <About></About>
        </Route>
        <Route path="/Contact">
          <Contact></Contact>
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
          <PrivateRoute path="/MyOrders">
             <MyOrders/> 
         </PrivateRoute>
         <PrivateRoute path="/AdventuresBooking/:bookingid">
             <AdventuresBooking /> 
          </PrivateRoute>
         <PrivateRoute path="/ManageAllOrders">
             <ManageAllOrders /> 
          </PrivateRoute>
          
         
          <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  </Router>
   </AuthProvider>
  );
}

export default App;
