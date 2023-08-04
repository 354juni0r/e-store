import React from "react";
import { NavLink } from "react-router-dom";
import MenuData from "../data/MenuData";

const BotNav = () => {
  return (
    <div>
      <div className="navbar bg-grey">
        {MenuData.map((data, id) => (
          <NavLink
            key={id}
            to={data.to}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {data.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BotNav;
