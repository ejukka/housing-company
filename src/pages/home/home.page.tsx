import React from "react";
import Menu from "../../components/menu/menu.component";
import menuProps from "../../types/MenuProps";

const getProps = (title: string, imageUrl: string): menuProps => {
  return {
    title: title,
    imageUrl: imageUrl,
    size: "400",
    history: ""
  };
};

const HomePage = (props: any) => {
  const { ...config } = props.props;
  return (
    <div className="container">
      <Menu {...getProps(config.menuTitle1, config.menuTitle1Link)} />
      <Menu {...getProps(config.menuTitle2, config.menuTitle2Link)} />
    </div>
  );
};

export default HomePage;
