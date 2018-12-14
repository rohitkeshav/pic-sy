//kriti
import React, { Component } from 'react';
import classnames from 'classnames';

class Security extends Component {
  state = {
    olpassword: '',
    newpassword: '',
    confirmpassword: '',
    errors: {}
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
    if (this.state.olpassword === '') errors.olpassword = "Can't be empty";
    if (this.state.newpassword === '') errors.newpassword = "Can't be empty";
    if (this.state.confirmpassword === '') errors.confirmpassword = "Can't be empty";
    this.setState({ errors });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h2 align="center">Change Password</h2>

        <div className={classnames('field', { error: !!this.state.errors.olpassword})}>
          <label htmlFor="olpassword">Old Password</label>
          <input
            name="olpassword"
            value={this.state.olpassword}
            onChange={this.handleChange}
            id="olpassword"
          />
          <span>{this.state.errors.olpassword}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.newpassword})}>
          <label htmlFor="newpassword">New Password</label>
          <input
            name="newpassword"
            value={this.state.newpassword}
            onChange={this.handleChange}
            id="newpassword"
          />
          <span>{this.state.errors.newpassword}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.confirmpassword})}>
          <label htmlFor="confirmpassword">Confirm New Password</label>
          <input
            name="confirmpassword"
            value={this.state.confirmpassword}
            onChange={this.handleChange}
            id="confirmpassword"
          />
          <span>{this.state.errors.confirmpassword}</span>
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    );
  }
}

export default Security;