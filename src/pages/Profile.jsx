import React from "react";
import { useParams } from "react-router-dom";
import MemberProfile from "../commponent/memberProfile/MemberProfile";
import ProfileList from "../commponent/profileList/ProfileList";

const Profile = () => {

  const {id} = useParams();


  
  return (
    <div>
      <MemberProfile memberId={id} />
      <ProfileList memberId={id} />
    </div>
  );
};

export default Profile;
