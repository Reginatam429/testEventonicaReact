import React, { Component } from 'react';

class Ticketmaster extends Component {
    
    state = {
        loading: true,
        event: null,
    };

    async componentDidMount(){
        const url =`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=382&apikey=${process.env.REACT_APP_TM_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({event: data._embedded.events[2], loading:false
        });
         console.log(data._embedded.events[0]._embedded.venues[0].name);
        
    }


    render(){
        if(this.state.loading) {
            return <div>loading...</div>;
        }

        if(!this.state.event) {
            return <div>Event could not be found</div>
        }
        return (
        
            <div>
                <h1>Find your next event in the Bay Area!</h1>

                <div>{this.state.event.name}</div>
                <div>{this.state.event.classifications[0].segment.name}</div>
                <img src={this.state.event.images[0].url} />
                <div>{this.state.event.dates.start.dateTime}</div>
                <div>{this.state.event._embedded.venues[0].name}</div>
            </div>
            
            );
        }
    };

    
export default Ticketmaster;