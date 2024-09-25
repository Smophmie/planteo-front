import HeroSection from "../components/HeroSection";
import UsersAdministration from "../components/UsersAdministration";
import PlantsAdministration from "../components/PlantsAdministration";

function Dashboard ({isAdmin}){
    return <>
        {isAdmin && <HeroSection title="Tableau de bord"/>}
        {isAdmin && <UsersAdministration/>}
        {isAdmin && <PlantsAdministration/>}
    </>
}

export default Dashboard;