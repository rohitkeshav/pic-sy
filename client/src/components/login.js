//kriti
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { doLogin } from '../actions';
import { Redirect } from 'react-router';

class Login extends Component {
  state = {
    username: '',
    password: '',
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
    if (this.state.username === '') errors.username = "Can't be empty";
    if (this.state.password === '') errors.password = "Can't be empty";
    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      console.log("state", this.state);
      const { username, password } = this.state;
      console.log("errors", errors)
      this.setState({ loading: true });
      this.props.doLogin({ username, password }).then(
        () => { this.setState({ done: true })},
        (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
      );
    }
  }

  render() {
    const form = (
      <form className={classnames('ui', 'container', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h2 align="center">Login</h2>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

        <div className={classnames('field', { error: !!this.state.errors.username})}>
          <label htmlFor="username">username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />
          <span>{this.state.errors.username}</span>
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

        <div className="field">
          <button className="ui primary button">Login</button>
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

export default connect(null, { doLogin })(Login);