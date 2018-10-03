import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

class LoginForm extends Component {
  loginUser = (event) => {
    event.preventDefault();
    Meteor.loginWithPassword(
      this.email.value, this.password.value, error => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button tpye="submit">Login User</button>
      </form>
    );
  }
}

export default LoginForm;
