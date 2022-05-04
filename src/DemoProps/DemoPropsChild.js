import React, { Component } from "react";

export default class DemoPropsChild extends Component {
  render() {
    return (
      <div>
        <p>Username : {this.props.name}</p>
        <p>Password : {this.props.password}</p>

        <button onClick={this.props.handleOnClick}>Change name</button>

        <p>{this.props.children}</p>
      </div>
    );
  }
}
