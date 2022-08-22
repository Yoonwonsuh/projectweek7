import React from "react";
import "./ProfilePostList.scss";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { useEffect } from "react";
import { getMyProfileThunk } from "../../redux/modules/profileSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProfilePostList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfileThunk(id));
  }, []);

  const ProfilePostList = useSelector((state) => state.profile.myPost);

  return (
    <div className="ProfilePostListContainer">

      {ProfilePostList.map((profilepost) => {
        return (
          <div className="ProfilePostListBox" key={profilepost.postId}>
            <div className="ProfileDarkness">
              <div className="ProfileListCount">
                <FaHeart style={{ fontSize: "15px" }} />
                &nbsp;{profilepost.postLikeCnt}&nbsp;&nbsp;&nbsp;
                <FaRegComment style={{ fontSize: "17px" }} />
                &nbsp;{profilepost.commentCnt}
              </div>
            </div>
            <img className="ProfilePostListImg" src={profilepost.imgUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfilePostList;
