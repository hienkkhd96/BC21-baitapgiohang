import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import { dataPhones } from "./dataPhones";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";
export default class BaiTapGioHang extends Component {
  state = {
    dataPhones: dataPhones,
    chiTietSanPham: dataPhones[0],

    gioHang: [],
  };
  handleThemSanPham = (sp) => {
    let gioHangCopy = [...this.state.gioHang];

    let index = this.state.gioHang.findIndex((item) => {
      return item.maSP == sp.maSP;
    });

    console.log({ index });

    if (index == -1) {
      let spGioHang = { ...sp, soLuong: 1 };

      gioHangCopy.push(spGioHang);
    } else {
      gioHangCopy[index].soLuong++;
    }

    this.setState({ gioHang: gioHangCopy }, () => {
      console.log(this.state.gioHang);
    });
  };

  handleSanPhamChiTiet = (sp) => {
    this.setState({ chiTietSanPham: sp });
  };

  handleThayDoiSoLuong = (idSp, giaTri) => {
    console.log(idSp);

    let index = this.state.gioHang.findIndex((item) => {
      return item.maSP == idSp;
    });

    let gioHangCopy = [...this.state.gioHang];
    if (index !== -1) {
      gioHangCopy[index].soLuong = gioHangCopy[index].soLuong + giaTri;

      // if (gioHangCopy[index].soLuong === 0) {
      //   gioHangCopy.splice(index, 1);
      // }
      gioHangCopy[index].soLuong === 0 && gioHangCopy.splice(index, 1);
    }

    this.setState({ gioHang: gioHangCopy });
  };
  render() {
    return (
      <div className="container py-5">
        <ModalGioHang
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
          gioHang={this.state.gioHang}
        />

        <DanhSachSanPham
          handleChange={this.handleSanPhamChiTiet}
          dataPhones={dataPhones}
          handleThemSanPham={this.handleThemSanPham}
        />
        <SanPhamChiTiet data={this.state.chiTietSanPham} />
      </div>
    );
  }
}
