import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "../components/Header";
import PlantsList from "../components/PlantsList";


function Plants() {
  return (
    <>
    <Header />
    <PlantsList />
    </>
  );
}

export default Plants
