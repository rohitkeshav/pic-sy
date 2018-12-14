import React, { Component } from 'react';
import { Switch, Route, Link, HashRouter } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Signup from './signup';

// content holds routes to our components
const Content = () => (
    <main>
      <Switch>
        <Route exact path="/loginDashboard/Login" component={Login} />
        <Route exact path="/loginDashboard/Signup" component={Signup} />
      </Switch>
    </main>
  )

export default class LoginDashboard extends Component {
    createListItems () {

    return (
            <div className="ui container">            
              <HashRouter>
              <div className="ui two item menu">
                <Link className="item" activeclassname="active" to="/loginDashboard/Login">Login</Link>
                <Link className="item" activeclassname="active" to="/loginDashboard/Signup">Signup</Link>
                </div>
                </HashRouter>
              <Content></Content>
                
            </div>

    )
}

    render() {
        return (
            <div>
                <h1>Login / Signup</h1>

                    <div className="container">

                    <div className="row">
                        { this.createListItems() }
                    </div>

                </div> 
             </div> 
        );
    }
}
