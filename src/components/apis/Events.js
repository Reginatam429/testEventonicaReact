import React, { Component } from 'react';
import {Consumer} from './context';
import Spinner from '../spinner';
import Event from './Event';

class Events extends Component {
    render() {
        return (
            <div>
               
                <Consumer>
                    {value => {
                        const {event_list, heading} =value
                        if(event_list === undefined || event_list.length === 0) {
                            return <Spinner />
                        } else {
                            return (
                                <React.Fragment>
                                    <h3 className="text-center mb-4">{heading}</h3>
                              <div className="row">
                                {event_list.map(item =>(
                                  <Event key={item._embedded.id} event={item}/>
                                ))}
                              </div>
                              </React.Fragment>
                            );
                        }
                    }}
                </Consumer>
            </div>
        );
    }
}

export default Events;