import React from 'react';
import './List.scss';

const ListNav = () => {
  return (
    <div className="ListNav_Wrap">
      <div className="ListNav_right">
        <div className="ListNav_img">프로필 이미지</div>
        <div>닉네임</div>
      </div>
      <button>설정버튼</button>
    </div>
  );
};

export default ListNav;
