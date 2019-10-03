import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import NavBar from "./Pages/NavBar"
import Home from "./Pages/Home";
import SingleRoom from "./Pages/SingleRoom";
import Rooms from "./Pages/Rooms";
import NotFound from './Pages/NotFound';
import Footer from "./Components/Footer"


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
      
      export default App;
