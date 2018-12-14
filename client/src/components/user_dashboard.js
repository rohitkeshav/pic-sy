import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Switch, Route, Link, HashRouter } from "react-router-dom";
// import selectUser from '../actions/index';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import ImageByUser from './ImageByUser';
import ImageUploadForm from './ImageUploadForm';
import Security from './Security';

// content holds routes to our components
const Content = () => (
    <main>
      <Switch>
        <Route exact path="/dashboard/ImageByUser" component={ImageByUser} />
        <Route exact path="/dashboard/ImageUploadForm" component={ImageUploadForm} />
        <Route exact path="/dashboard/Security" component={Security} />
      </Switch>
    </main>
  )

export default class UserDashboard extends Component {
    createListItems () {

    return (        
            <div className="ui container">
              
              <HashRouter>
              <div className="ui three item menu">
                <Link className="item" activeclassname="active" to="/dashboard/ImageByUser">Profile</Link>
                <Link className="item" activeclassname="active" to="/dashboard/ImageUploadForm">Upload</Link>
                <Link className="item" activeclassname="active" to="/dashboard/Security">Security</Link>
                </div>
                </HashRouter>
              <Content></Content>
                
            </div>

    )
}

    render() {
        return (
            <div>
                <h1>User Dashboard</h1>

                    <div className="container">

                    <div className="row">
                        { this.createListItems() }
                    </div>

                </div> 
             </div> 
        );
    }
}
