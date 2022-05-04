import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
    let { hinhAnh } = this.props.data;
    return (
      <div className="card col-4">
        <img
          style={{ width: "100%", height: "300px", objectFit: "cotain" }}
          className="card-img-top"
          src={hinhAnh}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
