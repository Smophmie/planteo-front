import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import MyProfile from "../components/MyProfile";
import MyFavorites from "../components/MyFavorites";

function Profile({ isAuthenticated }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${import.meta.env.VITE_BACK_URL_LARAVEL}connectedUser`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      const data = response.data;
      setUserData(data);
    })
  }, []);

  return (
    <>
      {userData && <HeroSection title = {userData.name} secondTitle={userData.city}/>}
      <MyFavorites/>
      <MyProfile/>
    </>
  );
}

export default Profile;
