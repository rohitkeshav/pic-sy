//kriti
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import { Redirect } from 'react-router';

class Signup extends Component {
  state = {
    fname: '',
    lname: '',
    password: '',
    email: '',
    uname: '',
    gender: '',
    errors: {},
    loading: false,
    done: false
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // validation
    let errors = {};
    // console.log("errors ==> ", errors);
    if (this.state.fname === '') errors.fname = "Can't be empty";
    if (this.state.lname === '') errors.lname = "Can't be empty";
    if (this.state.password === '') errors.password = "Can't be empty";
    if (this.state.email === '') errors.email = "Can't be empty";
    if (this.state.uname === '') errors.uname = "Can't be empty";
    if (this.state.gender === '') errors.gender = "Can't be empty";
    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0

    if (isValid) {
    //   console.log("state", this.state);
      const { fname, lname, password, email, uname, gender } = this.state;
    //   console.log("errors", errors)
      this.setState({ loading: true });
      this.props.createUser({ fname, lname, password, email, uname, gender }).then(
        () => { this.setState({ done: true })},
        (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
      );
    }
  }

  render() {
    const form = (
      <form className={classnames('ui', 'container', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h2 align="center">Signup</h2>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

        <div className={classnames('field', { error: !!this.state.errors.fname})}>
          <label htmlFor="fname">First Name</label>
          <input
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
            id="fname"
          />
          <span>{this.state.errors.fname}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.lname})}>
          <label htmlFor="lname">Last Name</label>
          <input
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
            id="lname"
          />
          <span>{this.state.errors.lname}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.password})}>
          <label htmlFor="password">Password</label>
          <input type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />
          <span>{this.state.errors.password}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.email})}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
          />
          <span>{this.state.errors.email}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.uname})}>
          <label htmlFor="uname">User Name</label>
          <input
            name="uname"
            value={this.state.uname}
            onChange={this.handleChange}
            id="uname"
          />
          <span>{this.state.errors.uname}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.gender})}>
          <label htmlFor="gender">Gender</label>
          <input
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            id="gender"
          />
          <span>{this.state.errors.gender}</span>
        </div>

        <div className="field">
          <button className="ui primary button">Signup</button>
        </div>
      </form>
    );
    return (
      <div>
        { this.state.done ? <Redirect to="/dashboard" /> : form }
      </div>
    );
  }
}

export default connect(null, { createUser })(Signup);