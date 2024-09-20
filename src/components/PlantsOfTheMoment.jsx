import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlantsOfTheMoment() {
    const [sowingPlants, setSowingPlants] = useState([]);
    const [plantingPlants, setPlantingPlants] = useState([]);
    const [harvestPlants, setHarvestPlants] = useState([]);
    const [month, setMonth] = useState('');

    useEffect(() => {
        let date = new Date();
        date = date.toLocaleDateString();
        const month = date.split("/")[1];
        setMonth(month);

        const fetchPlants = (periodType, setPlants) => {
            axios.get(`http://127.0.0.1:8000/api/plantsbyperiod/${month}/${periodType}`)
                .then(response => {
                    setPlants(response.data);
                })
                .catch(error => {
                    console.error(`There was an error fetching the ${periodType} plants!`, error);
                });
        };

        fetchPlants('sowing', setSowingPlants);
        fetchPlants('planting', setPlantingPlants);
        fetchPlants('harvest', setHarvestPlants);

    }, [month]);

    return (
        <div className='sm:m-20 my-14 mx-4 space-y-3'>
            <h2 className='text-3xl'>En ce moment</h2>
            <div>
                <h3 className="font-bold">C'est la période des semis</h3>
                <div className="flex flex-wrap m-3 justify-center">
                    {sowingPlants && sowingPlants.map(plant => (
                        <Link to={`/plant/${plant.id}`} key={plant.id} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 m-3 bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={`http://localhost:8000/${plant.image}`} alt={plant.name} className="w-full h-56 object-cover" />
                            <p className='text-center p-6'>{plant.name}</p>
                        </Link>
                    ))}
                    {!sowingPlants && <p>Rien à semer en ce moment !</p>}
                </div>
            </div>
            <div>
                <h3 className="font-bold">C'est la période des plantations</h3>
                <div className="flex flex-wrap m-3 justify-center">
                    {plantingPlants && plantingPlants.map(plant => (
                        <Link to={`/plant/${plant.id}`} key={plant.id} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 m-3 bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={`http://localhost:8000/${plant.image}`} alt={plant.name} className="w-full h-56 object-cover" />
                            <p className='text-center p-6'>{plant.name}</p>
                        </Link>
                    ))}
                    {!plantingPlants && <p>Rien à planter en ce moment !</p>}
                </div>
            </div>
            <div>
                <h3 className="font-bold">C'est la période des récoltes</h3>
                <div className="flex flex-wrap m-3 justify-center">
                    {harvestPlants && harvestPlants.map(plant => (
                        <Link to={`/plant/${plant.id}`} key={plant.id} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 m-3 bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={`http://localhost:8000/${plant.image}`} alt={plant.name} className="w-full h-56 object-cover" />
                            <p className='text-center p-6'>{plant.name}</p>
                        </Link>
                    ))}
                    {!harvestPlants && <p>Rien à récolter en ce moment !</p>}
                </div>
            </div>
        </div>
    );
}

export default PlantsOfTheMoment;
