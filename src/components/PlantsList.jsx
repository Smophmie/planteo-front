import { useEffect, useState } from "react";

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
        <div className="plantList">
          <ul>
            {plants.map( plant => 
              <li key={plant.id}>{plant.name}</li>
            )}
          </ul>
        </div>
      );
  }
  
  export default PlantsList
