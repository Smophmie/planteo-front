import AddEventButton from "../components/Calendar/AddEventButton";
import CalendarApp from "../components/Calendar/CalendarApp";
import HeroSection from "../components/HeroSection";

function MyCalendar () {
    return <>
        <HeroSection title="Mon calendrier"/>
        <AddEventButton/>
        <CalendarApp/>
    </>
}

export default MyCalendar;