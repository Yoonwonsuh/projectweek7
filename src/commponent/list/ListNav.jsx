import React from "react";
import "./List.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { onModalApearHandler } from "../../redux/modules/postsSlice";
import { useDispatch } from "react-redux";
import imgRound from "../../img/imgRound.png";
import PostModal from "../postModal/PostModal";

const ListNav = ({ ListData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nowNickName = localStorage.getItem("nickname");

  return (
    <div className="ListNav_Wrap">
      <div
        className="ListNav_left"
        onClick={() => navigate(`/profile/${ListData.author}`)}>
        <div className="ListNav_left_img_box">
          <img src={imgRound} className="ListNav_left_img_round" />
          <img
            className="ListNav_left_img"
            src={ListData.authorImgUrl}
            alt=""
          />
        </div>
        <div className="ListNav_left_txt">{ListData.author}</div>
      </div>
      <div className="ListNav_right_btn">
        {nowNickName === ListData.author ? (
          <>
            <AiOutlineEllipsis
              className="ListNav_right_btn_toggle"
              onClick={() => dispatch(onModalApearHandler(ListData))}
            />
            {ListData.isModalMode ? <PostModal ListData={ListData} /> : ""}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListNav;
