import React, { useState } from "react";
import "./ProfileList.scss";
import { FaTh, FaHeart } from "react-icons/fa";
import ProfilePostList from "../profilePostList/ProfilePostList";
import ProfileLikeList from "../profileLikeList/ProfileLikeList";

const ProfileList = () => {
  const [choice, setChoice] = useState(1);
  return (
    <>
      <div className="ProfileBottomContainer">
        <div className="ProfileBottomNavBar">
          {choice === 1 ? (
            <>
              {" "}
              <div className="ProfileBottomNavBarPost1">
                <div className="ProfileIconMargin">
                  <div className="ProfileBottomNavBarIcon">
                    <FaTh />
                  </div>
                  &nbsp; 게시물
                </div>
              </div>
              <div
                className="ProfileBottomNavBarLike1"
                onClick={() => setChoice(2)}
              >
                <div className="ProfileIconMargin">
                  <div className="ProfileBottomNavBarIcon">
                    <FaHeart />
                  </div>
                  &nbsp;좋아요
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="ProfileBottomNavBarPost2"
                onClick={() => setChoice(1)}
              >
                <div className="ProfileIconMargin">
                  <div className="ProfileBottomNavBarIcon">
                    <FaTh />
                  </div>
                  &nbsp; 게시물
                </div>
              </div>
              <div className="ProfileBottomNavBarLike2">
                <div className="ProfileIconMargin">
                  <div className="ProfileBottomNavBarIcon">
                    <FaHeart />
                  </div>
                  &nbsp;좋아요
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {choice === 1 ? <ProfilePostList /> : <ProfileLikeList />}
    </>
  );
};

export default ProfileList;
