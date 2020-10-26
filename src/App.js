import React, { useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Title from './components/Title'
import Month from './components/Month'
import EventCreator from './components/EventCreator'
import Events from './components/Events'
import { EventProvaider } from './Context/EventContex'



const fecha = new Date();
const year = fecha.getFullYear()

function App() {

  const [month, setMonth] = React.useState(fecha.getMonth());
  const [events, setEvents] = React.useState([])


  const changeMonth = (value) => {
    var newMonth = month + value
    if (newMonth > -1 && newMonth < 12)
      setMonth(newMonth)
  }


  const createNewEvent = (monthEvent, dayEvent, event) => {
    setEvents([...events, { month: monthEvent, day: dayEvent, event: event }])
  }

  const deleteEvent = (monthEvent, dayEvent, event) => {


    if(window.confirm("¿Seguro que desea eliminar el evento?"))
    setEvents(events.filter(item=> !(item.month===monthEvent && item.day=== dayEvent && item.event===event)))

  }
  useEffect(() => {
    let data = localStorage.getItem('events');
    if (data != null) {
      setEvents(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  return (
    <div className="App">
      <Title
        year={year}
      />
      <EventProvaider>
        <div className="container">
          <Month
            month={month}
            changeMonth={changeMonth}
            year={year}
            events={events}
          />
          <div className="events">
            <EventCreator
              createNewEvent={createNewEvent}
            />
            <Events
              events={events}
              deleteEvent={deleteEvent}
            />
          </div>
        </div>
      </EventProvaider>

    </div>
  );
}

export default App;
