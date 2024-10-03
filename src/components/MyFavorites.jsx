import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function MyFavorites () {
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${import.meta.env.VITE_BACK_URL_LARAVEL}favorites`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
        const data = response.data;
        if (data.length != 0){
            setFavorites(data);
        }   
        })
      }, []);

      return <>
        {favorites && <div className="m-16">
            <h2 className='text-3xl'>Mes favoris</h2>

            <div className="flex flex-wrap m-3 justify-center">
                {favorites.map(favorite => (
                    <Link to={`/plant/${favorite.id}`} key={favorite.id} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 m-3 bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={`http://localhost:8000/storage/${favorite.image}`} alt={favorite.name} className="w-full h-56 object-cover" />
                        <p className='text-center p-6'>{favorite.name}</p>
                    </Link>
                ))}
            </div>
        </div>}
      </>
}

export default MyFavorites;