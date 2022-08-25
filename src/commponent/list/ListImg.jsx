import React from "react";
import "./List.scss";


const ListImg = ({ ListData }) => {

  return (
    <div className="ListImg">
      <img className="ListImgurl" src={ListData.imgUrl} alt="" />
    </div>
  );
};

export default ListImg;
