import React from "react";
import "./List.scss";

const ListImg = ({ listData }) => {
  return (
    <div className="ListImg">
      <img className="ListImg" src={listData.imgUrl} alt="" />
    </div>
  );
};

export default ListImg;
