import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import { dataPhones } from "./dataPhones";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";
export default class BaiTapGioHang extends Component {
  state = {
    dataPhones: dataPhones,
    chiTietSanPham: dataPhones[0],
  };

  handleSanPhamChiTiet = (sp) => {
    this.setState({ chiTietSanPham: sp });
  };
  render() {
    return (
      <div className="container py-5">
        <ModalGioHang />

        <DanhSachSanPham
          handleChange={this.handleSanPhamChiTiet}
          dataPhones={dataPhones}
        />
        <SanPhamChiTiet data={this.state.chiTietSanPham} />
      </div>
    );
  }
}
