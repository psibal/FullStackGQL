import React, { Component } from 'react'

class Goal extends Component {
  render() {
    return (
      <li>
        <input type="checkbox"/>
        {this.props.goal.name}
      </li>
    )
  }
};

export default Goal;
