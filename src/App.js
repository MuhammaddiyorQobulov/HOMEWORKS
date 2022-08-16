import React, { Component } from "react";
import Content from "./components/content-section/content";
import Menus from "./components/menu-secction/menus/menus";
import User from "./components/menu-secction/user/user";
import Logo from "./components/menu-secction/logo";
import "bootstrap/dist/css/bootstrap.min.css";
import userImg from "./assets/Avater.png";
import "./assets/styles/app.scss";
import Navbar from "./components/navbar-section/navbar-section";
import { Route } from "react-router-dom";
import {
  home,
  clipboard,
  massage,
  inbox,
  analytic,
  news,
  setting,
  entrence,
  user,
} from "./assets/icons";
import { getFakeProducts } from "./assets/getProducts";

class App extends Component {
  state = {
    menus: [
      { path: "/dashboard", title: "Dashboard", icon: home },
      { path: "/users", title: "Users", icon: user },
      { path: "/orders", title: "Orders", icon: clipboard },
      { path: "/schedules", title: "Schedules", icon: inbox },
      { path: "/messages", title: "Messages", icon: massage },
      { path: "/inbox", title: "Inbox", icon: inbox },
      { path: "/analytics", title: "Analytics", icon: analytic },
      { path: "/news", title: "News", icon: news },
      { path: "/settings", title: "Settings", icon: setting },
    ],
    products: getFakeProducts(),
    selectedProduct: 0,
    menuTitle: "Dashboard",
    users: [
      {
        name: "Richard",
        email: "9394lay@gmail.com",
        img: userImg,
        icon: entrence,
      },
    ],
    menuTitle: "Dashboard",
    collapsed: JSON.parse(localStorage.getItem("collapsed")),
  };

  onCollapse = () => {
    localStorage.setItem("collapsed", !this.state.collapsed);
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  };

  onSelectedProduct = (product) => {
    this.setState({ selectedProduct: product });
  };
  onMenuTitle = (title) => {
    this.setState({ menuTitle: title });
  };

  render() {
    const { menus, users, collapsed, selectedProduct, products, menuTitle } =
      this.state;
    const { onCollapse, onSelectedProduct, onMenuTitle } = this;
    return (
      <div className="app">
        <div className="dashboard">
          <div>
            <Logo collapsed={collapsed} />
            <Menus
              onSelectedProduct={onSelectedProduct}
              menus={menus}
              collapsed={collapsed}
              products={products}
              onMenuTitle={onMenuTitle}
            />
          </div>
          <User users={users} collapsed={collapsed} />
        </div>
        <div className="datas">
          <Navbar onCollapse={onCollapse} menuTitle={menuTitle} />
          <Route
            path={"/users/:productID"}
            render={(props) => (
              <Content {...props} productId={selectedProduct} />
            )}
          />
          {/* <Content product={selectedProduct} /> */}
        </div>
      </div>
    );
  }
}

export default App;
