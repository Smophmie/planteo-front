import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/weather.css';
import weatherDescriptions from '../assets/weatherDescriptions.json'

function Weather() {
    const [weather, setWeather] = useState(null);

    const getCityInformations = async () => {
        try {
            const cityInfos = await axios.get('https://api.meteo-concept.com/api/location/cities?token=69abb6b6e44f75d575358ef9a3fe574127ec70091c186f36f716267558b6d182&search=dompierre-sur-besbre');
        } catch (error) {
            console.error('Erreur lors de la recherche de la ville', error);
        }
    }

    const getWeather = async () => {
        console.log('Recherche des données météo en cours...');
        try {
            const response = await axios.get('https://api.meteo-concept.com/api/forecast/daily/0?token=69abb6b6e44f75d575358ef9a3fe574127ec70091c186f36f716267558b6d182&insee=63040');
            const forecast = response.data.forecast;
            return forecast;         
        } catch (error) {
            console.error('Erreur lors de la recherche de données météo', error);
        }
    };

    useEffect(() => {
        getCityInformations();
        getWeather().then(forecast => {
            setWeather(forecast);
        });
    }, []);

    if (!weather) {
        return <div>Chargement...</div>;
    }
    

    return (
        <div className='sm:m-20 my-14 mx-4 weather'>
            <h2 className='text-3xl'>Météo du jour</h2>
            <div className='weather-block sm:m-16 m-6 sm:p-10 p-4 space-y-2 w-auto rounded-lg'>
                {/* Correspondances entre le nombre entier de weather.weather et la description météo en toutes lettres */}
                <p className='text-white bold'>Conditions météorologiques : {weatherDescriptions[weather.weather]}</p> 
                <p className='text-white bold'>Température maximale : {weather.tmax}°C</p>
                <p className='text-white bold'>Température minimale : {weather.tmin}°C</p>
                <p className='text-white bold'>Pluie attendue aujourd'hui : {weather.rr10}mm</p>
                <p className='text-white bold'>Vitesse du vent : {weather.wind10m}km/h</p>

            </div>
        </div>
    );
}

export default Weather;
