import React, { Component } from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import { topViewed } from './actions/index';
import NavBar from "./components/navbar";
import Categories from "./components/categories";
import Login from "./components/login";
import Home from "./components/home";
import UserDashboard from "./components/user_dashboard";
import ImageGrid from "./components/image_grid";
import ImageByUser from './components/ImageByUser';
import ImageUploadForm from './components/ImageUploadForm';
import Security from './components/Security';
import loginDashboard from './components/LoginDashboard';
import Signup from './components/signup';
import ImageDetails from './components/ImageDetails';
// import userList from '../containers/user_list';
import { connect } from 'react-redux';

// content holds routes to our components
const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/categories' component={Categories} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={UserDashboard} />
      <Route path='/loginDashboard' component={loginDashboard} />
      <Route path='/image_grid' component={ImageGrid} />
      <Route path="/ImageByUser" component={ImageByUser} />
      <Route path="/ImageUploadForm" component={ImageUploadForm} />
      <Route path="/Security" component={Security} />
      <Route path="/loginDashboard/Signup" component={Signup} />
      <Route path="/ImageDetails" component={ImageDetails} />
    </Switch>
  </main>
)


class App extends Component {

  componentDidMount() {
    var url='http://localhost:3000/api/mostviewed/'; 
    this.props.topViewed(url);
}
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

export default connect(null, {topViewed})(App);
// export default App;
