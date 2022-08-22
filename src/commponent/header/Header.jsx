import React from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import { MdOutlineKeyboardArrowDown, MdHomeFilled } from "react-icons/md";
import { BsPlusSquare, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header_wrap">
      <div className="header_container">
        <div className="container_left">
          <img className="container_left_logo_img" src={logo} alt="" />
          <button className="container_left_btn">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <div className="container_middle" role="button">
          <input
            className="container_middle_wrap"
            placeholder="검색"
            type="text"
          />
          {/* <div className="container_middle_box_search">
            <BiSearch className="container_middle_box_search_imo" />
          </div> */}
        </div>
        <div className="container_right">
          <div className="container_right_wrap">
            <div className="container_right_wrap _home">
              <MdHomeFilled className="container_right_home _home" />
            </div>
            <div className="container_right_wrap _plus">
              <BsPlusSquare
                className="container_right_plus _plus"
                onClick={() => navigate("/Posting")}
              />
            </div>
            <div className="container_right_wrap _heart">
              <BsHeart className="container_right_home _heart" />
            </div>
            <div className="container_right_wrap _img">
              <img
                className="container_right_img _img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/500px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
