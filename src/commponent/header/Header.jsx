import React from 'react';
import './Header.scss';
import logo from '../../img/logo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <div className="wrap">
      <div className="container_left">
        <img className="container_left_logo_img" src={logo} alt="" />
        <button className="container_left_btn">
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
      <div className="container_middle" role="button" tabIndex="0">
        <button className="container_middle_box" placeholder="검색"></button>
      </div>
      <div className="container_right"></div>
    </div>
  );
};

export default Header;
