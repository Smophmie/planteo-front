import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewMonthAgenda,
  createViewMonthGrid,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { useEffect, useState } from 'react'
import '@schedule-x/theme-default/dist/index.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import axios from 'axios'
import '../../assets/css/calendarapp.css'
 
function CalendarApp() {
  const plugins = [
      createEventsServicePlugin(),
      createEventModalPlugin(),
    ];
  
  const [events, setEvents] = useState([]);
 
  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_BACK_URL_LARAVEL}events`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des événements:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const calendar = useCalendarApp({
    views: [createViewMonthGrid(), createViewMonthAgenda()],
    events: events,
    locale: 'fr-FR',
  }, plugins)
 
  useEffect(() => {
    if (events.length > 0) {
      calendar.eventsService.set(events);
    }
  }, [events, calendar.eventsService]);
 
  return (
    <div className='w-3/4 my-10 mx-auto'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default CalendarApp