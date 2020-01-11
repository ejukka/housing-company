import React from "react";
import Menu from "../../components/menu/menu.component";

const config = {
  menuTitle1: `${process.env.REACT_APP_MENU_TITLE1}`,
  menuTitle1Link: `${process.env.REACT_APP_MENU_TITLE1_LINK}`,
  menuTitle2: `${process.env.REACT_APP_MENU_TITLE2}`,
  menuTitle2Link: `${process.env.REACT_APP_MENU_TITLE2_LINK}`
};

const HomePage = () => (
  <div className="container">
    <Menu
      title={config.menuTitle1}
      imageUrl={config.menuTitle2Link}
      size="400"
      history=""
    />
    <Menu
      title={config.menuTitle2}
      imageUrl={config.menuTitle1Link}
      size="100"
      history=""
    />
  </div>
);

export default HomePage;
