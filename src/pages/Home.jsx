import HeroSection from "../components/HeroSection";
import Weather from "../components/Weather";
import PlantsOfTheMoment from "../components/PlantsOfTheMoment";
import Presentation from "../components/Presentation";

function Home({isAuthenticated}) {
  return (
    <>
      <HeroSection title="Bonjour, vous pouvez commencer à jardiner."/>
      {!isAuthenticated && <Presentation/>}
      {isAuthenticated && <Weather/>}
      <PlantsOfTheMoment />
    </>
  );
}

export default Home
