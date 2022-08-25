import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HeaderModal.scss"

const HeaderModal = ({userNickName}) => {
const navigate = useNavigate();
const LogOut = () => {
    localStorage.clear();
    window.location.replace(`/`)
  }; 

    return (
        <div className="HeaderModalContainer">
        <div className="HeaderModalEditBox">
          <div className="HeaderModalEditText" onClick={()=>navigate(`/profile/${userNickName}`)}>프로필가기</div>
        </div>
        <div className="HeaderModalDeleteBox">
          <div className="HeaderModalDeleteText" onClick={()=>LogOut()}>로그아웃</div>
        </div>
      </div>
    );
};

export default HeaderModal;