import { useEffect, useState } from "react";
import "../assets/css/plantslist.css" ;
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";


function PlantsList() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = (search = "") => {
    const url = search 
        ? `http://127.0.0.1:8000/api/plantsbyname?search=${search}` 
        : "http://127.0.0.1:8000/api/plants";

    fetch(url, { type: "GET" })
        .then((res) => res.json())
        .then((data) => setPlants(data));
  };

  const handleSearchChange = (e) => {
      const newSearch = e.target.value;
      setSearch(newSearch);
      fetchPlants(newSearch);
  };

    return (
      <>
        <HeroSection 
          title="Toutes les plantes potagères" 
          showSearchbar
          search={search} 
          onSearchChange={handleSearchChange} />

        <div className="m-16 plants-list">
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
