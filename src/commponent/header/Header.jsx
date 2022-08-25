import React, { useState } from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMMyProfileThunk } from "../../redux/modules/myProfileSlice";
import homeempty from "../../img/homeempty.png";
import DMempty from "../../img/DMempty.png";
import Plusempty from "../../img/plusempty.png";
import loveempty from "../../img/loveempty.png";
import { onModalApearHandler } from "../../redux/modules/postsSlice";
import MainPostForm from "../mainPost/MainPostForm";
import HeaderModal from "./HeaderModal";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userNickName = localStorage.getItem("nickname");
  const [isModal, setIsModal] = useState(false);
  const [isProfileModal, setIsProfileModal] = useState(false);

  useEffect(() => {
    dispatch(getMMyProfileThunk(userNickName));
  }, [dispatch]);

  const myProfile = useSelector((state) => state.myprofile.myrealProfile);
  const listData = useSelector((state) => state.posts.postsList);

  console.log("12312321312312321321", listData);
  return (
    <>
      <div className="header_wrap">
        <div className="header_container">
          <div className="container_left">
            <img
              className="container_left_logo_img"
              src={logo}
              alt=""
              onClick={() => navigate("/")}
            />
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
              <div className="container_right_wrap_mini">
                <img src={homeempty} className="container_right_home" />
              </div>
              <div className="container_right_wrap_mini">
                <img src={DMempty} className="container_right_DM" />
              </div>
              <div className="container_right_wrap_mini">
                <img
                  src={Plusempty}
                  className="container_right_plus"
                  onClick={() => setIsModal(!isModal)}
                />
                {isModal ? (
                  <MainPostForm isModal={isModal} setIsModal={setIsModal} />
                ) : (
                  ""
                )}
              </div>
              <div className="container_right_wrap_mini">
                <img src={loveempty} className="container_right_heart" />
              </div>
              <div className="container_right_wrap_mini">
                <img
                  className="container_right_img"
                  src={myProfile.memberImgUrl}
                  alt=""
                  onClick={() => setIsProfileModal(!isProfileModal)}
                />
                {isProfileModal ? (
                  <HeaderModal userNickName={userNickName} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
