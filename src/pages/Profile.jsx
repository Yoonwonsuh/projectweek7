import React from "react";
import { useParams } from "react-router-dom";
import MemberProfile from "../commponent/memberProfile/MemberProfile";
import ProfileList from "../commponent/profileList/ProfileList";
import Header from "../commponent/header/Header";

const Profile = () => {

  const {id} = useParams();


  
  return (
    <div>
      <Header />
      <MemberProfile memberId={id} />
      <ProfileList/>
    </div>
  );
};

export default Profile;
