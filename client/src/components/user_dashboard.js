import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectUser from '../actions/index';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';


class UserDashboard extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            
            return (
                
                <li key={user.id} onClick={() => this.props.selectUser(user)}>
                    {user.fname} {user.lname}
                </li>

            );
        });
    }

    // trial for fetching data from API
    componentDidMount() {
        axios.get(`http://localhost:3000/api/user`)
            .then(res => {
                console.log(res.data);
            });
    }
    
    render() {
        return (
            <div>
                <h2>User Dashboard</h2>
                    <ul>
                        {this.createListItems()}
                    </ul>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDashboard);
