import React from "react";
import icons from "../assets/iconEnums";
import NavButton from "../assets/_button/nav-btn.svg";
import style from "../index.scss";
import cn from "classnames";

const buttons = [
  {
    icon: "messages",
    label: "信息",
  },
  {
    icon: "deposit",
    label: "充值",
  },
  {
    icon: "withdrawal",
    label: "提款",
  },
  {
    icon: "transfer",
    label: "转账",
  },
];

export default () => (
  <div className={cn(style.header)}>
    <div className={cn(style.mainHeader)}>
      <div className={cn(style.headerImage)}></div>
      <label>
        尊敬会员大家好〜人民银行已经進护完毕，大家可以正常进行取款即{" "}
      </label>
      <div className={cn(style.headerUser)}>
        u2testraki
        <label>
          中心: ¥ <span>44.0</span>
        </label>
      </div>
      <div className={cn(style.headerNavigation)}>
        {buttons.map(({ icon, label }, index) => (
          <div className={cn(style.content)} key={index}>
            <span>{React.createElement(icons[icon])}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className={cn(style.headerMenu)}>
      <NavButton />
      <span> 全部</span>
      体育赛事 &nbsp; 具人娱乐 &nbsp; 电子竞技 &nbsp; 电子游戏 &nbsp; 祺牌
    </div>
  </div>
);
