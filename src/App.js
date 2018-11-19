import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <h1> Picsy </h1>
            <p>
              Image sharing app, built on top of Electron and ReactJS
            </p>

            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
