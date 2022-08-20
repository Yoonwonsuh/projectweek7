import React from 'react';
import './List.scss';
import { AiOutlineEllipsis } from 'react-icons/ai';

const ListNav = () => {
  return (
    <div className="ListNav_Wrap">
      <div className="ListNav_right">
        <img
          className="ListNav_right_img"
          src="https://www.fnnews.com/resource/media/image/2022/08/12/202208121331140929_l.jpg"
          alt=""
        />
        <div className="ListNav_right_txt">배돌이</div>
      </div>
      <button className="ListNav_right_btn">
        <AiOutlineEllipsis className="ListNav_right_btn_toggle" />
      </button>
    </div>
  );
};

export default ListNav;
