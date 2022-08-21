import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMyProfileThunk,
  getMyPostThunk,
} from "../../redux/modules/profileSlice";
import "./MemberProfile.scss";

const MemberProfile = ({ memberId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfileThunk(memberId));
    dispatch(getMyPostThunk(memberId));
  }, [dispatch, memberId]);

  // const profilemember = useSelector((state)=> state.profile.myProfile)
  // const profilepost = useSelector((state)=> state.profile.myPost)
  // const nowNickname = localStorage.getItem("nickname");

  return (
    <div className="ProfileTopContainer">
      <div className="ProfileTopContainerImgBox">
        <img
          className="ProfileTopContainerImg"
          src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg"
        />
        {/* <img
          className="ProfileTopContainerImg"
          src={profilemember.memberImgUrl}
        /> */}
      </div>
      <div className="ProfileTopRightContainer">
        <div className="ProfileTopRightFirstBox">
          <div className="ProfileTopRightNickName">Profile.NickName</div>
          {/* <div className="ProfileTopRightNickName">{profilemember.nickname}</div> */}
          {/* {nowNickname === profilemember.nickname ? <div className="ProfileEditButton">프로필 편집</div> :'' } */}
          <div className="ProfileEditButton">프로필 편집</div>
        </div>
        <div className="ProfileTopRightSecondBox">
          게시물&nbsp;&nbsp;&nbsp;0
        </div>
        {/* <div className="ProfileTopRightSecondBox">
          게시물&nbsp;&nbsp;&nbsp;{profilepost.length}
        </div> */}
      </div>
    </div>
  );
};

export default MemberProfile;
