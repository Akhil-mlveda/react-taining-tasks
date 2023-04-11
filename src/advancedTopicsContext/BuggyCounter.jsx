import React from 'react';

export default class BuggyCounter extends React.Component {

  render() {
    if (this.props.Error) {
      throw new Error("I crashed!");
    }
    return <h1>can't deleting{this.props.Error}{console.log(this.props.Error)}</h1>;
  }
}