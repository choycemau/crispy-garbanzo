import React from "react";
import icons from "../assets/iconEnums";
import style from "../index.scss";
import cn from "classnames";

const buttons = [
  {
    icon: "home",
    label: "首页",
    isActive: true,
  },
  {
    icon: "promotion",
    label: "优惠",
    isActive: false,
  },
  {
    icon: "customerService",
    label: "客服",
    isActive: false,
  },
  {
    icon: "profile",
    label: "个人中心",
    isActive: false,
  },
];

export default () => (
  <div className={cn(style.navigation)}>
    {buttons.map(({ icon, label, isActive }, index) => (
      <div className={cn(style.content)} key={index}>
        <span>
          {React.createElement(icons[`${isActive ? icon + "_on" : icon}`])}
        </span>
        <span className={cn(isActive ? style.activeContent : null)}>
          {label}
        </span>
      </div>
    ))}
  </div>
);
