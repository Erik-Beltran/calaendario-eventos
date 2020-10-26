import React,{useState} from 'react'

const EventContext = React.createContext()
const { Provider, Consumer } = EventContext


const EventProvaider = ({ children }) => {
    const [event, setEvent]= useState([{day:"", month:"", isSelect:false}])
    

    return (
        <Provider value={{event, setEvent}}>
            {children}
        </Provider>

    )
}

export {EventProvaider, Consumer as EventConsumer, EventContext,}