import React, { Component } from 'react';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class userList extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li key={ user.id }>{ user.fname } { user.lname }</li>
            );
        });
    }
    
    render(){
        return(
            <ul>
                { this.createListItems() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(userList);
