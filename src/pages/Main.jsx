import React from "react";
// import Header from "../commponent/header/Header";
// import List from "../commponent/list/List";
import Login from "../commponent/login/Login";

const Main = () => {
  // const nickname = localStorage.getItem("nickename");
  return (
    <>
      {/* {nickname ? (
        <>
          <Header />
          <List />
        </>
      ) : ( */}
      <Login />
      {/* )} */}
    </>
  );
};

export default Main;
