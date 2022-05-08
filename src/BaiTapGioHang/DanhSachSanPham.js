import React, { Component } from "react";
import ItemPhone from "./ItemPhone";

export default class DanhSachSanPham extends Component {
  renderListPhone = () => {
    return this.props.dataPhones.map((item) => {
      return (
        <ItemPhone
          handleThemSanPham={this.props.handleThemSanPham}
          handleChange={this.props.handleChange}
          data={item}
        />
      );
    });
  };
  render() {
    return <div className="row">{this.renderListPhone()}</div>;
  }
}
