import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Quote from './views/Quote';

const Logout = () =>{
    window.localStorage.removeItem('token');
    return <Redirect to="/" />
}

function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/quote" component={Quote} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
        </Router>
    )
}

export default Routes;
