import React from "react";
import List from "../commponent/list/List";
import Header from "../commponent/header/Header";
import Login from "../commponent/login/login";
import { postsList } from "../redux/modules/postsSlice";
import { useSelector } from "react-redux";

const Main = () => {
  const nickName = localStorage.getItem("nickName");
  // const postsList = useSelector((state) => state.postsList.postsList);

  return (
    <>
      {/* {!nickName ? (
        <>
          <Header />

          <List />

          {postsList.map((item) => {
            return <List />;
          })}
        </>
      ) : ( */}
      <Login />
      {/* )} */}
    </>
  );
};

export default Main;
