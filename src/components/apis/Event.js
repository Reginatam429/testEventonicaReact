import React from 'react';
import { Card, CardBody } from 'reactstrap';

const Event = (props) => {
    const { event } = props;

  return (
    <div className="col-md-6">
        <Card className="card.mb-4.shadow-sm">
            <CardBody>
                <img src={event.images[1].url} />
               <h5 className="card-text">{event.name}</h5> 
               <p className="card-text">
                 <strong>Date: {event.dates.start.dateTime}</strong>
               </p>

               <p className="card-text">
                 <strong>Location: {event._embedded.venues[0].name}</strong>
               </p>
               <p className="card-text">
                 <strong>Category: {event.classifications[0].segment.name}</strong>
               </p>
               
               <br></br>
            </CardBody>
        </Card>
        <br></br>
    </div>
  )
}

export default Event;