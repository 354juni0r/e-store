import React from "react";

const BotNav = () => {
  return (
    <div>
      <div className="navbar bg-grey">
        <a href="#home">Home</a>
        <a href="#news">Feeds</a>
        <a href="#contact" className="active">
          Message
        </a>
        <a href="#shop">Shop</a>
        <a href="#profile">Profile</a>
      </div>
    </div>
  );
};

export default BotNav;
