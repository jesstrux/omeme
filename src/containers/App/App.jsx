import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from '../../store/configureStore';

import Home from '../Home/Home';
import Login from '../Login/Login';

export default class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                  <Route exact path="/" component={ Home }/>
                  <Route path="/login" component={ Login } />
                </div>
            </ConnectedRouter>
        );
    }
}
