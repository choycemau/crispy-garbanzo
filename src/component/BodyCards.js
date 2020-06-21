import React from "react";
import { cards } from "../assets/cardEnums";
import style from "../index.scss";
import cn from "classnames";

export default () => (
  <div className={cn(style.bodyCards)}>
    {cards.map((card, index) => (
      <div key={index}>{React.createElement(card)}</div>
    ))}
  </div>
);
