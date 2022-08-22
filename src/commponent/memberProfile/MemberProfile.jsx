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

  const profilemember = useSelector((state)=> state.profile.myProfile)
  console.log(profilemember)
  const profilepost = useSelector((state)=> state.profile.myPost)
  const nowNickname = localStorage.getItem("nickname");

  return (
    <div className="ProfileTopContainer">
      <div className="ProfileTopContainerImgBox">
        <img
          className="ProfileTopContainerImg"
          src={profilemember.memberImgUrl}
        />
      </div>
      <div className="ProfileTopRightContainer">
        <div className="ProfileTopRightFirstBox">
          <div className="ProfileTopRightNickName">{profilemember.nickname}</div>
          {nowNickname === profilemember.nickname ? <div className="ProfileEditButton">프로필 편집</div> :'' }
        </div>
        <div className="ProfileTopRightSecondBox">
          게시물&nbsp;&nbsp;&nbsp;{profilepost.length}
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
