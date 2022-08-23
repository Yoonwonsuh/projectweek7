import React from "react";
import "./List.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { onModalHandler } from "../../redux/modules/postsSlice";
import Detail from "../detail/Detail";
import { useDispatch } from "react-redux";
import imgRound from "../../img/imgRound.png";
import PostModal from "../postModal/PostModal";

const ListNav = ({ ListData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="ListNav_Wrap">
      <div
        className="ListNav_left"
        onClick={() => navigate(`/profile/${ListData.author}`)}
      >
        <div className="ListNav_left_img_box">
          <img src={imgRound} className="ListNav_left_img_round"/>
          <img
            className="ListNav_left_img"
            src={ListData.authorImgUrl}
            alt=""
          />
        </div>
        <div className="ListNav_left_txt">{ListData.author}</div>
      </div>
      <button className="ListNav_right_btn">
        <AiOutlineEllipsis className="ListNav_right_btn_toggle" />
        {!ListData.isModalMode ? <PostModal ListData={ListData} /> : ''}
      </button>
    </div>
  );
};

export default ListNav;
