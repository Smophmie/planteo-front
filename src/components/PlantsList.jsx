import { useEffect, useState } from "react";
import "../assets/css/plantslist.css" ;
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";


function PlantsList() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/plants", {
          type: "GET",
        }).then((res) => res.json())
        .then((data) => {
            setPlants(data);
          })
      }, [])

    return (
      <>
        <HeroSection title="Tous les légumes"/>

        <div className="m-12">
          <h1>List of Plants</h1>
          <ul className="space-y-2">
            {plants.map((plant) => (
              <li key={plant.id}>
                <Link to={`/plant/${plant.id}`}>{plant.name.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  
  export default PlantsList
