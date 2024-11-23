import React, { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="public\search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "public/minus.png" : "public/plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="public/avatar.png" alt="" />
        <div className="texts">
          <span>Monsaf kamal</span>
          <p>Hellow</p>
        </div>
      </div>

      <div className="item">
        <img src="public/avatar.png" alt="" />
        <div className="texts">
          <span>Monsaf Ali</span>
          <p>Hellow</p>
        </div>
      </div>
      <div className="item">
        <img src="public/avatar.png" alt="" />
        <div className="texts">
          <span>Monsaf Ali</span>
          <p>Hellow</p>
        </div>
      </div>
      <div className="item">
        <img src="public/avatar.png" alt="" />
        <div className="texts">
          <span>Monsaf Ali</span>
          <p>Hellow</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
