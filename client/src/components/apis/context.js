import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_EVENTS':
            return {
                ...state,
                event_list: action.payload,
                heading: 'Search Results'
            };
            default:
                return state;
    }
};

export class Provider extends Component {
    state = {
        event_list: [],
        heading: 'Top 20 Events',
        dispatch: action => this.setState(state => reducer(state,action))
    };

    componentDidMount(){
        axios
            .get(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=382&apikey=${process.env.REACT_APP_TM_KEY}`)
            .then(res => {
                console.log(res.data);
                this.setState({event_list: res.data._embedded.events});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
           <Context.Provider value={this.state}>
            {this.props.children}
           </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
