import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

class App extends Component {
  displayResolutions() {
    const { loading, resolutions } = this.props;
    if (loading) {
      return (
        <li>Loading...</li>
      )
    } else {
      return (
        resolutions.map(resolution => {
          return (
            <li key={resolution._id}>{resolution.name}</li>
          )
        })
      );
    }
  };
  render() {
    return (
      <div>
        <h1>Full Stack GraphQL</h1>
        <h3>Register</h3>
        <RegisterForm />
        <h3>Login</h3>
        <LoginForm />
        <button onClick={() => Meteor.logout()} >Logout</button>
        <h3>new resolution</h3>
        <ResolutionForm />
        <ul>
          {this.displayResolutions()}
        </ul>
      </div>
    )
  }
}

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(App);
