import React from "react";
import "./ProfileLikeList.scss";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { useEffect } from "react";
import { getMyProfileThunk } from "../../redux/modules/profileSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProfileLikeList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfileThunk(id));
  }, []);

  const ProfileLikeList = useSelector((state) => state.profile.myLikePost);

  return (
    <div className="ProfileLikeListContainer">
      {ProfileLikeList.map((profileLike) => {
        <div className="ProfilePostListBox" key={profileLike.postId}>
          <div className="ProfileDarkness">
            <div className="ProfileListCount">
              <FaHeart style={{ fontSize: "15px" }} />
              &nbsp;{profileLike.postLikeCnt}&nbsp;&nbsp;&nbsp;
              <FaRegComment style={{ fontSize: "17px" }} />
              &nbsp;{profileLike.commentCnt}
            </div>
          </div>
          <img className="ProfileLikeListImg" src={profileLike.imgUrl} />
        </div>;
      })}
    </div>
  );
};

export default ProfileLikeList;
