import React, { useState } from "react";
import "./ProfilePostList.scss";
import Modal from "react-bootstrap/Modal";
import { FaHeart, FaRegComment } from "react-icons/fa";

import { useEffect } from "react";
import { getMyProfileThunk } from "../../redux/modules/profileSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfilePost from "./ProfilePost";

const ProfilePostList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getMyProfileThunk(id));
  }, []);

  const ProfilePostList = useSelector((state) => state.profile.myPost);


  return (
    <div className="ProfilePostListContainer">
      {ProfilePostList.slice(0).reverse().map((profilepost) => {
        return <ProfilePost profilepost={profilepost} key={profilepost.postId}/>;
      })}
    </div>
  );
};

export default ProfilePostList;
