import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/plant.css"

function Plant({isAuthenticated}) {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACK_URL_LARAVEL}plants/${id}`);
                setPlant(response.data);

                if(isAuthenticated){
                    const favoriteResponse = await axios.get(`${import.meta.env.VITE_BACK_URL_LARAVEL}favorite/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setIsFavorite(favoriteResponse.data.isFavorite);
                }
                setLoading(false);
            } catch (err) {
                setError('Erreur lors du chargement des données de la plante.');
                setLoading(false);
            }
        };

        fetchPlant();
    }, [id]);

    const handleFavoriteToggle = async () => {
        try {
            if (isFavorite) {
                await axios.delete(`${import.meta.env.VITE_BACK_URL_LARAVEL}favorites`, { 
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data: { plant_id: id }
                });
                setIsFavorite(false);
            } else {
                await axios.post(`${import.meta.env.VITE_BACK_URL_LARAVEL}favorites`, { plant_id: id }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIsFavorite(true);
            }
        } catch (err) {
            setError('Erreur lors de la mise à jour des favoris.');
        }
    };

    const getMonthLabels = (months) => {
        const monthLabels = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
        const monthsArray = months.split(', ').map(m => parseInt(m, 10) - 1);

        return monthLabels.map((label, index) => {
            if (monthsArray.includes(index)) {
                return <strong key={index} className="p-1 yellow">{label}</strong>;
            }
            return <span key={index} className="p-1">{label}</span>;
        });
    };

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="plant">
            {plant && (
                <>
                {plant.image && (
                    <img 
                        src={`http://localhost:8000/storage/${plant.image}`}  
                        alt={plant.name} 
                        className="w-screen h-60 object-cover shadow-lg"
                    />
                )}
                
                <div className="plant-details m-12 space-y-4">
                    <div className="flex flex-row items-center gap-3">
                        <h1 className="text-3xl">{plant.name}</h1>
                        {isAuthenticated && <div 
                            className="circle text-center flex items-center justify-center cursor-pointer"
                            onClick={handleFavoriteToggle}
                        >
                            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                        </div>}
                    </div>
                    <div className="space-x-4">
                        {plant.type.split(', ').map((type, index) => (
                            <span key={index} className="plant-type uppercase text-xs">{type}</span>
                        ))}
                    </div>
                    {plant.sowing_period && 
                        (<div className="space-y-2">
                            <p className="font-bold">Périodes de semis: </p>
                            <p className="rounded-lg bg-slate-100 w-max p-1">{getMonthLabels(plant.sowing_period)}</p>
                        </div>
                    )}
                    {plant.planting_period && 
                        (<div className="space-y-2">
                            <p className="font-bold">Périodes de plantation: </p>
                            <p className="rounded-lg bg-slate-100 w-max p-1">{getMonthLabels(plant.planting_period)}</p>
                        </div>
                    )}
                    <div className="space-y-2">
                        <p className="font-bold">Périodes de récolte: </p>
                        <p className="rounded-lg bg-slate-100 w-max p-1">{getMonthLabels(plant.harvest_period)}</p>
                    </div>
                    <div>
                        <p className="font-bold">Sol: </p>
                        <p>{plant.soil}</p>
                    </div>
                    <div className="flex gap-28">
                        <div>
                            <p className="font-bold">Arrosage: </p>
                            <p>{plant.watering}</p>
                        </div>
                        <div>
                            <p className="font-bold">Exposition: </p>
                            <p>{plant.exposure}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">Entretien: </p>
                        <p>{plant.maintenance}</p>
                    </div>
                    <div>
                        <p className="font-bold">Description:</p>
                        <p>{plant.description}</p>
                    </div>
                </div>
                </>
            )}
            <Link to="/all-plants" className="p-12">Retour à la liste des plantes</Link>
        </div>
    );
}

export default Plant;