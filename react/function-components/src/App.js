import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Individual from './components/Individual';

function App() {
  return (
    // Si voy a usar react-router-dom el primer componente siempre es <Router />
    // Va a permitir detectar las URLs
    <Router>
      {/* Switch me va a permitir identificar la URL y pintar el componente adecuado */}
      <Switch>
        {/* Adentro de <Switch /> simpre va <Route /> */}
        {/* Cuando entren al path "/" debe de pintar el componente <Home /> */}
        <Route exact path="/">
          <Home saludo={"6"} />
        </Route>

        <Route exact path="/author/:idAuthor">
          <Individual />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
 
      </Switch>
    </Router>
  );
}

export default App;
