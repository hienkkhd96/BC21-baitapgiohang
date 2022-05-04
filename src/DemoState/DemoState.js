import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    isLogin: true,
    username: "Alice",
    soLuong: 0,
  };

  handleLogout = () => {
    // this.state.isLogin = false;

    this.setState({
      isLogin: false,
    });

    // console.log("this.state.isLogin", this.state.isLogin);
  };
  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  renderLoginContent = () => {
    if (this.state.isLogin) {
      return (
        <div>
          <h3>Wellcome back!</h3>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Please login!</h3>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      );
    }
  };
  render() {
    console.log("this.state.isLogin", this.state.isLogin);

    return (
      <div>
        {this.state.isLogin ? "Đã đăng nhập" : "Chưa đăng nhập"}
        <p>Username: {this.state.username}</p>

        <div>{this.renderLoginContent()}</div>

        <div>
          <p>Số lượng : {this.state.soLuong}</p>

          <button
            onClick={() => {
              this.setState({
                soLuong: this.state.soLuong + 1,
              });
            }}
          >
            Tăng số lượng
          </button>
        </div>
      </div>
    );
  }
}

// let isSoChan = 20%2==0 ? true: false
