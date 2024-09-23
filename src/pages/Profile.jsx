import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import MyProfile from "../components/MyProfile";

function Profile({ isAuthenticated }) {

  return (
    <>
      <HeroSection title = "Mon espace"/>
      <MyProfile/>
    </>
  );
}

export default Profile;
