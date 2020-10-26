import React, { useContext } from 'react'
import { EventContext } from '../Context/EventContex'
import '../styles/events.css'

const EventCreator = ({ handleSubmitFN, createNewEvent }) => {

    const [value, setValue] = React.useState("")
    const [valueWarning, setValueWarning] = React.useState("")

    const event = useContext(EventContext)
    var aux = event.event[0]

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const createEvent = (e) => {
        e.preventDefault()
        const warning = document.getElementById("warning")

        if (aux.month === "" ) {
            setValueWarning("debe seleccionar un dia")
            warning.style.display = "block"
            setTimeout(() => {
                warning.style.display = "none"
              }, 4000);   
        } else if (value === ""){
            setValueWarning("Debe ingresar un evento")
                warning.style.display = "block"
                setTimeout(() => {
                    warning.style.display = "none"
                  }, 4000);
        }
        else
        createNewEvent(aux.month, aux.day, value) 
        setValue("")
    }
    
    return (
        <div className="eventCreator">
            <h3 class="title is-3">Eventos</h3>
            <form class="field has-addons" onSubmit={createEvent}>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Nuevo Evento"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <div class="control">
                    <button
                        class="button is-info"
                    >
                        Agregar
                        </button>
                </div>
            </form>
            <Warning mensaje={valueWarning} ></Warning>

        </div>
    )
}

const Warning = ({ mensaje }) => {
    return (
        <div id="warning">
            <article class="message is-warning" id="mensajes">
                <div class="message-header">
                    <p>Warning</p>
                </div>
                <div class="message-body">
                    {mensaje}
                </div>
            </article>
        </div>
    )
}

export default EventCreator;