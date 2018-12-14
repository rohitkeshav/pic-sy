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
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        //             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        //                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/categories">Profile</Link>
        //                         </li>

        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/login">Upload</Link>
        //                         </li>

        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/dashboard">Security</Link>
        //                         </li>

        //                     </ul>

        //             </div>
        //         </nav>
        
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



//     createListItems() {
//         return this.props.users.map((user) => {
            
//             return (
                
//                 <li key={user.id} onClick={() => this.props.selectUser(user)}>
//                     {user.fname} {user.lname}
//                 </li>

//             );
//         });
//     }

//     // trial for fetching data from API
//     componentDidMount() {
//         axios.get(`http://localhost:3000/api/user`)
//             .then(res => {
//                 console.log(res.data);
//             });
//     }
    
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


// function mapStateToProps(state) {
//     return {
//         users: state.users
//     }
// }

// function matchDispatchToProps(dispatch){
//     return bindActionCreators({selectUser: selectUser}, dispatch)
// }

// export default connect(mapStateToProps, matchDispatchToProps)(UserDashboard);
