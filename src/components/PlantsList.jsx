import { useEffect } from "react";

function PlantsList() {
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/plants", {
          type: "GET",
        }).then((res) => console.log(res.json()))
      }, [])


    return 
  }
  
  export default PlantsList
