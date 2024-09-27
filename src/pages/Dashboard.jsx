import HeroSection from "../components/HeroSection";
import UsersAdministration from "../components/UsersAdministration";
import PlantsAdministration from "../components/PlantsAdministration";

function Dashboard (){
    return <>
       <HeroSection title="Tableau de bord"/>
       <UsersAdministration/>
       <PlantsAdministration/>
    </>
}

export default Dashboard;