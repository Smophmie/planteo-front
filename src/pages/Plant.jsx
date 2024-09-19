import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/plant.css"

function Plant() {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/plants/${id}`);
                setPlant(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors du chargement des données de la plante.');
                setLoading(false);
            }
        };

        fetchPlant();
    }, [id]);

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
        <div>
            {plant && (
                <>
                {plant.image && (
                    <img 
                        src={`http://localhost:8000/${plant.image}`}  
                        alt="" 
                        className="w-screen h-60 object-cover shadow-lg"
                    />
                )}
                
                <div className="plant-details m-12 space-y-4">
                    <h1 className="text-3xl">{plant.name}</h1>
                    <div className="space-x-4">
                        {plant.type.split(', ').map((type, index) => (
                            <span key={index} className="plant-type uppercase text-xs">{type}</span>
                        ))}
                    </div>
                    {plant.sowing_period && 
                        (<div className="space-y-2">
                            <h2 className="font-bold">Périodes de semis: </h2>
                            <p className="rounded-lg bg-slate-100 w-max p-1">{getMonthLabels(plant.sowing_period)}</p>
                        </div>
                    )}
                    {plant.planting_period && 
                        (<div className="space-y-2">
                            <h2 className="font-bold">Périodes de plantation: </h2>
                            <p className="rounded-lg bg-slate-100 w-max p-1">{getMonthLabels(plant.planting_period)}</p>
                        </div>
                    )}
                    <div className="space-y-2">
                        <h2 className="font-bold">Périodes de récolte: </h2>
                        <p className="rounded-lg bg-slate-100 w-max p-1">{getMonthLabels(plant.harvest_period)}</p>
                    </div>
                    <div>
                        <h2 className="font-bold">Sol: </h2>
                        <p>{plant.soil}</p>
                    </div>
                    <div className="flex gap-28">
                        <div>
                            <h2 className="font-bold">Arrosage: </h2>
                            <p>{plant.watering}</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Exposition: </h2>
                            <p>{plant.exposure}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">Entretien: </h2>
                        <p>{plant.maintenance}</p>
                    </div>
                    <div>
                        <h2 className="font-bold">Description:</h2>
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
