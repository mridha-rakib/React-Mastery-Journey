import React from "react";
import style from "./style.module.css";
import MenuListItem from "../MenuListItem/MenuListItem";

const MenuList = (props) => {
  console.log(props);
  return (
    <div className={style.container}>
      <MenuListItem
        isSelected={props.difficulty === "low"}
        onClick={props.onMenuListItemClick}
        difficulty={"low"}
      />
      <MenuListItem
        isSelected={props.difficulty === "Medium"}
        onClick={props.onMenuListItemClick}
        difficulty={"Medium"}
      />
      <MenuListItem
        isSelected={props.difficulty === "High"}
        onClick={props.onMenuListItemClick}
        difficulty={"High"}
      />
      <MenuListItem
        isSelected={props.difficulty === "Insane"}
        onClick={props.onMenuListItemClick}
        difficulty={"Insane"}
      />
    </div>
  );
};

export default MenuList;
