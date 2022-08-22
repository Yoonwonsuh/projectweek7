import React from "react";
import "./ProfilePostList.scss";
import {
    FaHeart,
    FaRegComment,
  } from "react-icons/fa";

const ProfilePostList = () => {
  return (
    <div className="ProfilePostListContainer">
        {/* 어차피 맵돌릴꺼임 */}
      <div className="ProfilePostListBox">
        <div className="ProfileDarkness">
            <div className="ProfileListCount"><FaHeart style={{fontSize:"15px"}}/>&nbsp;0&nbsp;&nbsp;&nbsp;<FaRegComment style={{fontSize:"17px"}}/>&nbsp;5</div>
        </div>
        <img
          className="ProfilePostListImg"
          src="https://i.pinimg.com/236x/db/97/1a/db971a98bb388e856e4cd1d12c32933f.jpg"
        />
      </div>
      <div className="ProfilePostListBox">
        <div className="ProfileDarkness">
            <div className="ProfileListCount"><FaHeart style={{fontSize:"15px"}}/>&nbsp;15&nbsp;&nbsp;&nbsp;<FaRegComment style={{fontSize:"17px"}}/>&nbsp;3</div>
        </div>
        <img
          className="ProfilePostListImg"
          src="https://i.pinimg.com/236x/43/d9/fa/43d9fa463cea8218371487edfb57483f.jpg"
          />
      </div>
      <div className="ProfilePostListBox">
        <div className="ProfileDarkness">
            <div className="ProfileListCount"><FaHeart style={{fontSize:"15px"}}/>&nbsp;12&nbsp;&nbsp;&nbsp;<FaRegComment style={{fontSize:"17px"}}/>&nbsp;6</div>
        </div>
        <img
          className="ProfilePostListImg"
          src="https://i.pinimg.com/236x/9e/0d/76/9e0d76b3464f72b8abfeb7146da71b10.jpg"
          />
      </div>
      <div className="ProfilePostListBox">
        <div className="ProfileDarkness">
            <div className="ProfileListCount"><FaHeart style={{fontSize:"15px"}}/>&nbsp;29&nbsp;&nbsp;&nbsp;<FaRegComment style={{fontSize:"17px"}}/>&nbsp;4</div>
        </div>
        <img
          className="ProfilePostListImg"
          src="https://i.pinimg.com/236x/62/e6/b3/62e6b3d958cc3dae1f417a40be12ee6a.jpg"
          />
      </div>
      <div className="ProfilePostListBox">
        <div className="ProfileDarkness">
            <div className="ProfileListCount"><FaHeart style={{fontSize:"15px"}}/>&nbsp;2000&nbsp;&nbsp;&nbsp;<FaRegComment style={{fontSize:"17px"}}/>&nbsp;1</div>
        </div>
        <img
          className="ProfilePostListImg"
          src="https://i.pinimg.com/236x/01/d0/02/01d0028280036cfcf5b972ee0b936495.jpg"
          />
      </div>
      <div className="ProfilePostListBox">
        <div className="ProfileDarkness">
            <div className="ProfileListCount"><FaHeart style={{fontSize:"15px"}}/>&nbsp;400&nbsp;&nbsp;&nbsp;<FaRegComment style={{fontSize:"17px"}}/>&nbsp;90</div>
        </div>
        <img
          className="ProfilePostListImg"
          src="https://i.pinimg.com/236x/4e/f4/64/4ef464719694fb5629933bbf3d62edf0.jpg"
          />
      </div>
      <div className="ProfilePostListBox">
        <div className="ProfileDarkness">
            <div className="ProfileListCount"><FaHeart style={{fontSize:"15px"}}/>&nbsp;0&nbsp;&nbsp;&nbsp;<FaRegComment style={{fontSize:"15px"}}/>&nbsp;1</div>
        </div>
        <img
          className="ProfilePostListImg"
          src="https://i.pinimg.com/236x/76/ce/0b/76ce0b3c38ddb4fb6dbf4d38b0b0d48f.jpg"
          />
      </div>

    </div>
  );
};

export default ProfilePostList;
