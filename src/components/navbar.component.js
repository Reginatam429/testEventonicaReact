import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';

export default class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <NavLink to="/" className="navbar-brand" >EventonicaReact</NavLink>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavDropdown title="Users" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" > <NavLink to="/create/user">Create User</NavLink></NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2"><NavLink to="/user/edit/:id">Edit User</NavLink></NavDropdown.Item> */}
          </NavDropdown>
          </li>
          <li>
            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" > <NavLink to="/events">Find Event</NavLink></NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2"><NavLink to="/savedevents">View Saved Events</NavLink></NavDropdown.Item> */}
          </NavDropdown>
          </li>
        </ul>
        
        </div>
      </nav>
    );
  }
}