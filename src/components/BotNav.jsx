import React from "react";
import { Link } from "react-router-dom";
import MenuData from "../data/MenuData";

const BotNav = () => {
  return (
    <div>
      <div className="navbar bg-grey">
        {MenuData.map((data, id) => (
          <Link key={id} to={data.to}>
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BotNav;
