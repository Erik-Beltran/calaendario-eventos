import React, { useContext,useEffect } from 'react'
import { EventContext } from '../Context/EventContex'
import '../styles/days.css'



const Days = ({ year, month, events }) => {
    const {event,setEvent } = useContext(EventContext)

    const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"]
    const daysMonth = new Date(year, month + 1, 0).getDate();
    const initialDay = new Date(year, month, 1).getDay()
    const actualDay = new Date().getDate()
    const actualMonth = new Date().getMonth()

    const totalCells = []
    for (let index = 0; index < initialDay; index++) {
        totalCells.push({ month: "", day: "", td: <td>{}</td> })
    }

    const imprimir = (value) => {
        setEvent([{ day: value, month: month, isSelect: true }])
    }


    for (let index = 1; index <= daysMonth; index++) {

        if (actualDay === index && actualMonth === month) {
            totalCells.push({
                month: month, day: index, td: <td className="actualDay" onClick={() => imprimir(index)}
                >{index}</td>
            })
        } else {
            totalCells.push(
                {
                    month: month,
                    day: index,
                    td:
                        <td
                            onClick={() => imprimir(index)}
                            id={`${month}-${index}`}>
                            {index}
                        </td>
                })
        }
    }

    totalCells.map(element => {
        events.map(event=>{
            if(event.day=== element.day && event.month=== element.month)
            element.td= <td className="eventDay" onClick={() => imprimir(element.day)}
            >{element.day}</td>
        })
    })
    
    let rows = []
    let cells = []

    totalCells.forEach((td, i) => {
        if ((i % 7) !== 0) {
            cells.push(td.td)
        } else {
            let auxRow = cells.slice()
            rows.push(auxRow)
            cells = []
            cells.push(td.td)
        }
        if (i === totalCells.length - 1) {
            let auxRow = cells.slice()
            rows.push(auxRow)
        }
    })

    useEffect(() => {
        let data = localStorage.getItem('eventDay');
        if (data != null) {
          setEvent(JSON.parse(data))
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem('eventDay', JSON.stringify(event))
      }, [event])
    
    return (
        <table class="table is-striped is-bordered is-narrow" id="table">
            <thead>
                <tr>
                    {days.map(day => (
                        <th>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(day => (
                    <tr>{day}</tr>
                ))}
            </tbody>
        </table>

    )
}



export default Days;

