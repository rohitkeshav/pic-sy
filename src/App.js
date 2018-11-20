import React, { Component } from 'react';
import NavBar from "./navbar";
import { Route, Switch, HashRouter } from "react-router-dom";
import Categories from "./categories";
import Stuff from "./stuff";
import Home from "./home";

// content holds routes to our components
const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/categories' component={Categories} />
      <Route path='/login' component={Stuff} />
    </Switch>
  </main>
)


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar></NavBar>
          <Content></Content>
        </div>
      </HashRouter>
    );
  }
}

export default App;
