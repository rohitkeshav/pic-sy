import React, { Component } from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";

import NavBar from "./components/navbar";
import Categories from "./components/categories";
import Login from "./components/login";
import Home from "./components/home";
import UserDashboard from "./components/user_dashboard";

// import userList from '../containers/user_list';


// content holds routes to our components
const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/categories' component={Categories} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={UserDashboard} />
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
