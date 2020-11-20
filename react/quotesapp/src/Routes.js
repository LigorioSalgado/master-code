import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';

function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />

            </Switch>
        </Router>
    )
}

export default Routes;
