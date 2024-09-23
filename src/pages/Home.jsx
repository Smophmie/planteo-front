import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Weather from "../components/Weather";
import PlantsOfTheMoment from "../components/PlantsOfTheMoment";

function Home({isAuthenticated}) {
  return (
    <>
      <HeroSection title="Bonjour, vous pouvez commencer à jardiner."/>
      {isAuthenticated && <Weather isAuthenticated={isAuthenticated}/>}
      <PlantsOfTheMoment />
    </>
  );
}

export default Home
