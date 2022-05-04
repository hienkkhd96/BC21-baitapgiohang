import React, { Component } from "react";

export default class ItemAnimal extends Component {
  render() {
    let { img, name, price } = this.props.item;
    return (
      <div className="card col-3">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price} $</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
