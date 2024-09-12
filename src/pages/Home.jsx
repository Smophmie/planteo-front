import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <HeroSection title="Bonjour, vous pouvez commencer à jardiner."/>
    </>
  );
}

export default Home
