import React, { Component } from "react";
import { getProduct } from "../../assets/getProducts";
import "./content.scss";
import Content from "./content";
import { Route } from "react-router-dom";
class Contents extends Component {
  render() {
    const { match, menu } = this.props;
    return (
      <>
        <h1>{menu.title}</h1>
        <Route
          path={`${menu.path}/:productID`}
          render={(props) => (
            <Content key={props.match.url} menu={menu} {...props} />
          )}
        />
      </>
    );
  }
}

export default Contents;
