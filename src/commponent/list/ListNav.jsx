import React from 'react';
import './List.scss';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ListNav = ({ listData }) => {
  const navigate = useNavigate();
  return (
    <div className="ListNav_Wrap">
      <div className="ListNav_left">
        <img
          className="ListNav_left_img"
          src="{listData.authorImgUrl}"
          alt=""
          onClick={() => {
            navigate('/detail');
          }}
        />
        <div className="ListNav_left_txt">{listData.author}</div>
      </div>
      <button className="ListNav_right_btn">
        <AiOutlineEllipsis className="ListNav_right_btn_toggle" />
      </button>
    </div>
  );
};

export default ListNav;
