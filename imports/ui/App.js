import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './ResolutionForm';

class App extends Component {
  displayResolutions() {
    const { data } = this.props;
    console.log(data);
    if(data.loading) {
      return (
        <li>Loading...</li>
      )
    } else {
      return (
        data.resolutions.map(resolution => {
          return (
            <li key={resolution._id}>{resolution.name}</li>
          )
        })
      );
    }
  };
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Full Stack GraphQL</h1>
        <ResolutionForm refetch={data.refetch}/>
        <ul>
          {this.displayResolutions()}
        </ul>
      </div>
    )
  }
}

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
