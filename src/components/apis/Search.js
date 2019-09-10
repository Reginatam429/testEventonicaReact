import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from './context';

class Search extends Component {
    
    state = {
        eventCategory: ""
    };

    findEvent = (dispatch, e) => {
        e.preventDefault();

        axios
            .get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${this.state.eventCategory}&dmaId=382&apikey=${process.env.REACT_APP_TM_KEY}`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_EVENTS',
                    payload: res.data._embedded.events
                });

                this.setState({ eventCategory: ''});
            })
            .catch(err => console.log(err));
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                        <h1>Find your next event in the Bay Area!</h1>
                        <br></br>
                        <div className="card card-body mb-4 p-4">
                            <h5 className=" text-center">
                                Search for Event Category
                            </h5>
                            <form onSubmit={this.findEvent.bind(this,dispatch)}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Event Category...music, sports, family, arts, comedy" 
                                    name="eventCategory"
                                    value={this.state.eventCategory}
                                    onChange={this.onChange}
                                    />
                                </div>
                                <button className="btn btn-info btn-lg btn-block mb-5" typee="submit">
                                    Get Event Category
                                </button>
                            </form>
                            
                        </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default Search;