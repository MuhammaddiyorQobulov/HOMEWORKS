import React, { Component } from "react";
import "./content.scss";
class Content extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <img src={product.img} alt="product img" />
        <h1>Name: {product.name}</h1>
        <h3>Price : ${product.price}</h3>
        <h2>Seller : ${product.seller}</h2>
      </div>
    );
  }
}

export default Content;
