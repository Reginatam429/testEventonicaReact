import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//Ticketmaster

import Ticketmaster from "./components/ticketmaster.component";

import Navbar from "./components/navbar.component";

//Homepage
import Homepage from "./components/homepage.component";

//Event
import EventList from "./components/events-list.component";
import EditEvents from "./components/edit-events.component";
//User
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";

//Savedevents
import SavedeventsList from "./components/savedevents-list.component";

function App() {
  return (
    <body>
    <Router>
      
      <div className="container">
        <Navbar />
        <br/>
          {/*Homepage Route*/}
          <Route path="/" exact component={Homepage} />

          {/*Event Routes*/}
          <Route path="/events" component={EventList} />
          <Route path="event/edit/:id" component={EditEvents} />

          {/*User Routes*/}
          <Route path="/user/edit/:id" component={EditUser} />
          <Route path="/create/user" component={CreateUser} />

          {/*Eventsaved Routes*/}
          <Route path="/savedevents" exact component={SavedeventsList} />

          {/*TMtest Route*/}
          <Route path="/tmtest" exact component={Ticketmaster} />    
      </div>
    </Router>
    </body>
  );
}

export default App;
