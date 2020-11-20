import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Quote from './views/Quote';

function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/quote" component={Quote} />

            </Switch>
        </Router>
    )
}

export default Routes;
