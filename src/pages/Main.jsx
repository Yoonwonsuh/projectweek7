import React from "react";
import List from "../commponent/list/List";
import Header from "../commponent/header/Header";
import Login from "../commponent/login/LoginForm";
import { postsList } from "../redux/modules/postsSlice";
import { useSelector } from "react-redux";
import "./Main.scss";

const Main = () => {
  const nickname = localStorage.getItem("nickname");

  return (
    <>
      {nickname ? (
        <>
          <Header />
          <div className="MainWrap">
            {/* {postsList.map((item) => {
            return <List />;
          })} */}
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Main;
