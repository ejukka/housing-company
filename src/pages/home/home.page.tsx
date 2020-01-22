import React from "react";
import Menu from "../../components/menu/menu.component";
import menuProps from "../../types/MenuProps";

const config = {
  menuTitle1: `${process.env.REACT_APP_MENU_TITLE1}`,
  menuTitle1Link: `${process.env.REACT_APP_MENU_TITLE1_LINK}`,
  menuTitle2: `${process.env.REACT_APP_MENU_TITLE2}`,
  menuTitle2Link: `${process.env.REACT_APP_MENU_TITLE2_LINK}`
};

const getProps = (title: string, imageUrl: string): menuProps => {
  return {
    title: title,
    imageUrl: imageUrl,
    size: "400",
    history: ""
  };
};

const HomePage = () => {
  return (
    <div className="container">
      <Menu {...getProps(config.menuTitle1, config.menuTitle1Link)} />
      <Menu {...getProps(config.menuTitle2, config.menuTitle2Link)} />
    </div>
  );
};

export default HomePage;
