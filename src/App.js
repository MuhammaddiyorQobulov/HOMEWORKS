import React, { Component } from "react";
import Content from "./components/content-section/content";
import Menus from "./components/menu-secction/menus";
import User from "./components/menu-secction/user";
import Logo from "./components/menu-secction/logo";

import "bootstrap/dist/css/bootstrap.min.css";
import userImg from "./assets/Avater.png";
import {
  search,
  logo,
  home,
  clipboard,
  massage,
  inbox,
  analytic,
  news,
  setting,
  entrence,
} from "./assets/icons";
let lastActive = 0;
class App extends Component {
  state = {
    menus: [
      { title: "Dashboard", icon: home, status: true },
      { title: "Orders", icon: clipboard, status: false },
      { title: "Schedules", icon: inbox, status: false },
      { title: "Messages", icon: massage, status: false },
      { title: "Inbox", icon: inbox, status: false },
      { title: "Analytics", icon: analytic, status: false },
      { title: "News", icon: news, status: false },
      { title: "Settings", icon: setting, status: false },
    ],
    users: [
      {
        name: "Richard",
        email: "9394lay@gmail.com",
        img: userImg,
        icon: entrence,
      },
    ],
    menuTitle: "Dashboard",
    media: true,
    logoName: "MingCute",
  };

  onMedia = () => {
    this.setState({ media: !this.state.media });
  };

  onSelect = (a, idx) => {
    const { menus } = this.state;
    menus[lastActive].status = false;
    menus[idx].status = true;
    lastActive = idx;
    this.setState({
      menuTitle: a,
    });
  };

  render() {
    const { menus, users, menuTitle, logoName, media } = this.state;
    const { onMedia, onSelect, onActive } = this;
    return (
      <div className="app">
        <div className="dashboard">
          <Logo
            logo={logo}
            search={search}
            logoName={logoName}
            className="d-none"
            media={media}
          />
          <Menus menus={menus} media={media} onSelect={onSelect} />
          <User users={users} media={media} />
        </div>
        <Content menuTitle={menuTitle} onMedia={onMedia} />
      </div>
    );
  }
}

export default App;
