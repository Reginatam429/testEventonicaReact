import React, {Component} from 'react';
import Events from './apis/Events';
import Search from './apis/Search';
import { Provider } from './apis/context';


export default class EventsList extends Component {

    render() {
        return (
            <Provider>
            <React.Fragment>
                <Search/>
                <Events/>
            </React.Fragment>
            </Provider>
        );
    }
}
