import React, { Component } from "react";
import DemoPropsChild from "./DemoPropsChild";

export default class DemoPropsParent extends Component {
  state = {
    username: "Alice",
  };

  handleChangeName = () => {
    this.setState({
      username: "Bob",
    });
  };
  render() {
    return (
      <div>
        <DemoPropsChild
          name={this.state.username}
          password={"123abcxyz"}
          handleOnClick={this.handleChangeName}
        >
          Hello Việt Nam
        </DemoPropsChild>

        <p>Yes</p>
      </div>
    );
  }
}
