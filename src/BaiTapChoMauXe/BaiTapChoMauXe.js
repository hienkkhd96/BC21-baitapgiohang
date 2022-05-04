import React, { Component } from "react";

export default class BaiTapChoMauXe extends Component {
  state = {
    imgSrc: "./img/imgBlackCar.jpg",
  };

  handleChangeColorCar = (source) => {
    this.setState({ imgSrc: source });
  };
  render() {
    return (
      <div className="container py-5 ">
        <div className="row">
          <img src={this.state.imgSrc} alt="" className="col-5" />
          <div className="col-7">
            <button
              onClick={() => {
                this.handleChangeColorCar("./img/imgRedCar.jpg");
              }}
              className="btn mx-1 btn-danger"
            >
              Red car
            </button>
            <button
              onClick={() => {
                this.handleChangeColorCar("./img/imgBlackCar.jpg");
              }}
              className="btn mx-1 btn-dark"
            >
              Black car
            </button>
            <button
              onClick={() => {
                this.handleChangeColorCar("./img/imgSilverCar.jpg");
              }}
              className="btn mx-1 btn-secondary"
            >
              Silver car
            </button>
          </div>
        </div>
      </div>
    );
  }
}
