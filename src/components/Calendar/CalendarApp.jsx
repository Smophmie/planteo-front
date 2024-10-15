import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewMonthAgenda,
  createViewMonthGrid,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { useEffect } from 'react'
 
import '@schedule-x/theme-default/dist/index.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { fr } from 'date-fns/locale';

 
function CalendarApp() {
    const plugins = [
        createEventsServicePlugin(),
        createEventModalPlugin(),
        createDragAndDropPlugin(),
      ];
 
  const calendar = useCalendarApp({
    views: [createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Evènement 1',
        start: '2024-10-15',
        end: '2024-10-15',
      },
    ],
    locale: 'fr-FR',
  }, plugins)
 
  useEffect(() => {
    calendar.eventsService.getAll()
  }, [])
 
  return (
    <div className='w-3/4 my-10 mx-auto'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default CalendarApp