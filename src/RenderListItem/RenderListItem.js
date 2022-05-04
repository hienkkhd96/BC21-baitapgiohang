import React, { Component } from "react";
import { animalsArr } from "./dataAnimals";
import ItemAnimal from "./ItemAnimal";

export default class RenderListItem extends Component {
  state = {
    data: animalsArr,
  };

  renderListItem = () => {
    return this.state.data.map((item) => {
      console.log(item);
      return <ItemAnimal item={item} />;
    });
  };
  render() {
    return (
      <div>
        <h2>RenderListItem</h2>

        <div className="row">{this.renderListItem()}</div>
      </div>
    );
  }
}
