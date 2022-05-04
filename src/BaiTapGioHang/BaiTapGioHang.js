import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import { dataPhones } from "./dataPhones";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";
export default class BaiTapGioHang extends Component {
  state = {
    dataPhones: dataPhones,
  };
  render() {
    return (
      <div>
        <ModalGioHang />

        <DanhSachSanPham dataPhones={dataPhones} />
        <SanPhamChiTiet />
      </div>
    );
  }
}
