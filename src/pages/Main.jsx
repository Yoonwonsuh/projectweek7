import React from "react";
import List from "../commponent/list/List";
import Header from "../commponent/header/Header";
import Login from "../commponent/login/LoginForm";
import "./Main.scss";

const Main = () => {
  const nickname = localStorage.getItem("nickname");

  return (
    <>
      {nickname ? (
        <>
          <Header />
          <div className="MainWrap">
            <List />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Main;
