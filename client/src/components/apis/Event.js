import React from 'react';
import { Card, CardBody } from 'reactstrap';

const Event = (props) => {
    const { event } = props;

  return (
    <div className="col-md-6">
        <Card className="card.mb-4.shadow-sm">
            <CardBody>
                <img alt='' src={event.event_img} />
               <h5 className="card-text">{event.name}</h5> 
               <p className="card-text">
                 <strong>Date: {event.event_date}</strong>
               </p>

               <p className="card-text">
                 <strong>Location: {event.event_venue ? event.event_venue+''+event.event_address : event.event_address}</strong>
               </p>
               <p className="card-text">
                 <strong>Category: {event.event_category}</strong>
               </p>
               
               <br></br>
            </CardBody>
        </Card>
        <br></br>
    </div>
  )
}

export default Event;