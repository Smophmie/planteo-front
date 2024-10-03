import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function PlantsAdministration(){
    const [plants, setPlants] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${import.meta.env.VITE_BACK_URL_LARAVEL}plants`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
        const data = response.data;
        if (data.length != 0){
            setPlants(data);
        } 
        })
      }, []);

      const deletePlant = (plantId) => {
        const token = localStorage.getItem('token');
        axios.delete(`${import.meta.env.VITE_BACK_URL_LARAVEL}plants/${plantId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setPlants(plants.filter(plant => plant.id !== plantId));
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de la plante.", error);
        });
      };

      return <div className="container m-16">
      <h2 className="text-3xl mb-5">Toutes les plantes</h2>
      <button className='btn uppercase green-button my-6'><Link to="/create-plant">Créer une plante</Link></button>
      {plants && <ul className="space-y-3">
            {plants.map((plant) => (
              <li key={plant.id} className="space-x-3 flex py-2 px-4 border-b w-min">
                <Link to={`/plant/${plant.id}`} className="w-64 text-center">{plant.name}</Link>
                <Link to={`/edit-plant/${plant.id}`} className="w-9"><i className="fa-solid fa-pen"></i></Link>
                <button onClick={() => deletePlant(plant.id)} className="w-9">
                    <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            ))}
        </ul>}
      </div>

}

export default PlantsAdministration;
