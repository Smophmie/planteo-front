import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import MyProfile from "../components/MyProfile";
import MyFavorites from "../components/MyFavorites";

function Profile() {
  const [userName, setUserName] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  

  useEffect(() => {
    setUserName(localStorage.getItem('name'));
    setUserCity(localStorage.getItem('city'));
    setDataLoaded(true); 
  }, []);

  return (
    <>
      {dataLoaded && (<HeroSection title = {userName} secondTitle={userCity}/>)}
      <MyFavorites/>
      <MyProfile/>
    </>
  );
}

export default Profile;
