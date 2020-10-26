import React, { useContext } from 'react'
import { EventContext } from '../Context/EventContex'
import '../styles/events.css'

const Events = ({ events, deleteEvent }) => {

    const [showCompleted, setShowClompeted] = React.useState(false)

    const eventsSort = events.sort(function (a, b) {
        return [a.month - b.month]
    })

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
        "Marzo"
    ];

    const handleChecked = (e) => {
        setShowClompeted(preValue => !preValue)
    }

    const event = useContext(EventContext)
    var aux = event.event[0]

    const showEvents = events.filter(event => event.month === aux.month && event.day === aux.day)
    // console.log(showEvents)
    var isChecked = aux.isSelect


    return (
        <div>
            {isChecked && (
                <div className="eventsDay">
                    <p class="subtitle is-5">
                        {`Eventos del ${aux.day} de ${meses[aux.month]}`}
                    </p>
                    <ul>
                        {showEvents.map(event => (
                            <li>
                                <p >{event.event}</p>
                                <button
                                    class="delete is-small has-background-danger"
                                    onClick={() => deleteEvent(aux.month, aux.day, event.event)}
                                    
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }

            <div class="form-check">
                <input class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    onChange={handleChecked}
                    checked={showCompleted}
                />
                <label
                    class="form-check-label"
                    for="defaultCheck1">
                    Mostrar todos los eventos del año
                </label>
            </div>
            {
                showCompleted && (
                    <ul>
                        {eventsSort.map(event => (
                            <li className="event">
                                <p>
                                    <strong>{`${event.day} de ${meses[event.month]}`}</strong>
                                </p>
                                <p>{event.event}</p>
                            </li>
                        ))}
                    </ul>

                )
            }
        </div>

    )
}

export default Events;