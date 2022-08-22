import React from "react";
import List from "../commponent/list/List";
import Header from "../commponent/header/Header";
import Login from "../commponent/login/LoginForm";
import "./Main.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { _postsList } from "../redux/modules/postsSlice";
import { useState } from "react";

const Main = () => {
  const nickname = localStorage.getItem("nickname");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_postsList());
  }, []);

  const listData = useSelector((state) => state.posts.postsList);

  return (
    <>
      {nickname ? (
        <>
          <Header />
          <div className="MainWrap">
            {listData.map((item) => {
              return <List key={item.id} listData={item} />;
            })}
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Main;
