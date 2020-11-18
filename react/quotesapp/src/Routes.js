import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './views/Home';

function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/"  component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes;
