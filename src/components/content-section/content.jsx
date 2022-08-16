import React, { Component } from "react";
import { getProduct } from "../../assets/getProducts";
import "./content.scss";
class Content extends Component {
  state = {
    loading: true,
    product: {},
    productId: NaN,
  };
  componentDidMount() {
    const { productID } = this.props.match.params;
    getProduct(productID).then((product) => {
      const imgURL = product.img;
      const image = new Image();
      image.src = imgURL;
      image.onload = () =>
        this.setState({ product, loading: false, productId: productID });
    });
  }

  componentDidUpdate(prevProps, productId) {
    productId = this.state.productId;
    const { productID } = this.props.match.params;
    if (productId !== productID) {
      getProduct(productID).then((product) => {
        const imgURL = product.img;
        const image = new Image();
        image.src = imgURL;
        image.onload = () =>
          this.setState({ product, loading: false, productId: productID });
      });
    }
  }

  render() {
    const { product, loading } = this.state;
    const { match } = this.props;
    if (loading)
      return (
        <div
          className="d-flex justify-content-center align-items-center w-100 "
          style={{ height: "80vh" }}
        >
          <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );

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
