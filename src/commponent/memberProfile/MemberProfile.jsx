import React from "react";
import "./MemberProfile.scss"

const MemberProfile = () => {
  return (
    <div className="ProfileTopContainer">
      <div className="ProfileTopContainerImgBox">
        <img
          className="ProfileTopContainerImg"
          src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg"
        />
      </div>
      <div className="ProfileTopRightContainer">
        <div className="ProfileTopRightFirstBox">
          <div className="ProfileTopRightNickName">Profile.NickName</div>
          <div className="ProfileEditButton">프로필 편집</div>
        </div>
        <div className="ProfileTopRightSecondBox">
          게시물&nbsp;&nbsp;&nbsp;0
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
