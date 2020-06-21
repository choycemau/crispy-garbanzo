import React from "react";
import BodyCards from "./component/BodyCards";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import style from "./index.scss";
import cn from "classnames";

export default () => (
  <div className={cn(style.root)}>
    <div className={cn(style.container)}>
      <Header />
      <BodyCards />
      <Navigation />
    </div>
  </div>
);
