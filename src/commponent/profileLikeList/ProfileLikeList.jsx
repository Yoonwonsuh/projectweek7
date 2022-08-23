import React, { useState } from "react";
import "./ProfileLikeList.scss";
import Modal from "react-bootstrap/Modal";
import { FaHeart, FaRegComment } from "react-icons/fa";
import Detail from "../detail/Detail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileLike from "./ProfileLike";
import { getMyLikePostThunk } from "../../redux/modules/profileSlice";

const ProfileLikeList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getMyLikePostThunk(id));
  }, []);

  const ProfileLikeList = useSelector((state) => state.profile.myLikePost);

  return (
    <div className="ProfileLikeListContainer">
      {ProfileLikeList.slice(0).reverse().map((profileLike) => {
        return (
          <ProfileLike profileLike={profileLike}/>
        );
      })}
    </div>
  );
};

export default ProfileLikeList;
