import { useEffect, useState } from "react";
import axios from "axios";


function PlantsAdministration(){
    const [plants, setPlants] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:8000/api/plants", {
          headers: {
              Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
        const data = response.data;
        console.log(data);
        if (data.length != 0){
            setPlants(data);
        } 
        })
      }, []);

}

export default PlantsAdministration;
