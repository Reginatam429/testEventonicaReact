import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, Button } from 'reactstrap';
import concert from "../Images/concert.png";


export default class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to Eventonica!</h1>
                <br></br>
                <p>This is the place for you find the perfect event to attend!</p>
                <br></br>
                
                <div>
                  <Card style={{flex:1, backgroundColor:'blue'}}>
                  <CardBody style={{backgroundColor:'white'}} >
                   <p className="cardText">What yould you like to do:</p>
                  <div className="centerButtons">
                    <NavLink to="/create/user"><Button size="lg" block > Create your user </Button></NavLink><br></br>
                    <NavLink to="/events"><Button size="lg" block>See upcoming events in San Francisco Bay Area</Button></NavLink><br></br>
                    {/* <NavLink to="/user/edit/:id"><Button  size="lg" block>Edit your user info</Button></NavLink> */}
                   </div>
                  </CardBody>
                </Card>
                </div>
                <div>
                  <img src={concert} alt="concert"
                  height={300}
                  width={860}/>
                </div>
            </div>
        )
    }
}