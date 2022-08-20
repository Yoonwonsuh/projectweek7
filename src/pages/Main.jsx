import React from "react";
// import List from "../commponent/list/List";
// import Header from "../commponent/header/Header";
import Login from "../commponent/login/login";
// import { postsList } from "../redux/modules/postsSlice";
import { useSelector } from "react-redux";

const Main = () => {
  const nickname = localStorage.getItem("nickname");
  // const postsList = useSelector((state) => state.postsList.postsList);

  return (
    <>
      {nickname ? (
        // <>
        <div>확인</div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Main;
