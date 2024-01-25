import { useState } from "react";
import style from "./style.module.css";

const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const active = () => {
    setIsHovered(true);
  };

  const deactivate = () => {
    setIsHovered(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onItemClick}
      className={style.container}
      onMouseEnter={active}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to: {props.difficulty}
    </div>
  );
};

export default MenuListItem;
