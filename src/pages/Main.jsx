import React from 'react';
import List from '../commponent/list/List';
import Header from '../commponent/header/Header';
import Login from '../commponent/login/Login';
import { postsList } from '../redux/modules/postsSlice';
import { useSelector } from 'react-redux';
import './Main.scss';
const Main = () => {


  const nickname = localStorage.getItem("nickname");

  return (
    <>
      <div className="MainWrap">
        {!nickName ? (
          <>
            <Header />



            {/* {postsList.map((item) => {
            return <List />;
          })} */}
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default Main;
