import React, { useState } from "react";
import "./menu.scss";
import { down, up } from "../../../assets/icons";
import { Link } from "react-router-dom";

const Menu = ({ collapsed, title, icon, path, selectedProduct, products }) => {
  // const fakeProducts = [
  //   {
  //     id: "867255",
  //     name: "Licensed Cotton Hat",
  //     price: "583.00",
  //     seller: "Luna",
  //     img: "https://loremflickr.com/500/500/food",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "556636",
  //     name: "Licensed Plastic Ball",
  //     price: "908.00",
  //     seller: "Forest",
  //     img: "https://loremflickr.com/500/500/transport",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "809085",
  //     name: "Bespoke Granite Tuna",
  //     price: "356.00",
  //     seller: "Abagail",
  //     img: "https://loremflickr.com/500/500/food",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "136604",
  //     name: "Tasty Granite Computer",
  //     price: "107.00",
  //     seller: "Humberto",
  //     img: "https://loremflickr.com/500/500/sports",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "363308",
  //     name: "Bespoke Metal Computer",
  //     price: "171.00",
  //     seller: "Deron",
  //     img: "https://loremflickr.com/500/500/business",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "682616",
  //     name: "Gorgeous Concrete Soap",
  //     price: "70.00",
  //     seller: "Deon",
  //     img: "https://loremflickr.com/500/500/people",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "768032",
  //     name: "Unbranded Fresh Mouse",
  //     price: "915.00",
  //     seller: "Jalon",
  //     img: "https://loremflickr.com/500/500/sports",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "416682",
  //     name: "Recycled Frozen Bike",
  //     price: "116.00",
  //     seller: "Daphney",
  //     img: "https://loremflickr.com/500/500/animals",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "645061",
  //     name: "Handmade Bronze Ball",
  //     price: "865.00",
  //     seller: "Elissa",
  //     img: "https://loremflickr.com/500/500/cats",
  //     path: "/users/infos:productID",
  //   },
  //   {
  //     id: "275288",
  //     name: "Unbranded Metal Tuna",
  //     price: "214.00",
  //     seller: "Marquise",
  //     img: "https://loremflickr.com/500/500/sports",
  //     path: "/users/infos:productID",
  //   },
  // ];
  // const fakeProducts
  const fakeProducts = products;
  const [state, setState] = useState(false);
  if (window.location.pathname.slice(0, path.length) !== path) {
    if (state) setState(false);
  }
  return (
    <div className="menu">
      <div
        className={`menu-part ${
          window.location.pathname.slice(0, path.length) === path && "active"
        }`}
      >
        <Link to={path} className="navbar-brand">
          <div className="menu-link">
            <nav>{icon}</nav>
            {collapsed && <span>{title}</span>}
          </div>
        </Link>
        <article
          onClick={() => {
            setState(!state);
          }}
          style={{ marginRight: collapsed && "15px" }}
        >
          {collapsed ? (state ? up : down) : null}
        </article>
      </div>
      {title === "Users" && state && collapsed && (
        <div className="acardion">
          {fakeProducts.map((product, idx) => (
            <div key={product.name}>
              <Link to={`/users/${product.id}`}>
                <p onClick={() => selectedProduct(product.id)}>
                  {product.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
