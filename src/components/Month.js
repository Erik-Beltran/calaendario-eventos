import React from 'react'
import Days from './Days'
import '../styles/month.css'

const meses = [
    { name: "Enero" },
    { name: "Febrero" },
    { name: "Marzo" },
    { name: "Abril" },
    { name: "Mayo" },
    { name: "Junio" },
    { name: "Julio" },
    { name: "Agosto" },
    { name: "Septiembre" },
    { name: "Octubre" },
    { name: "Noviembre" },
    { name: "Diciembre" }
];



const Month = ({ month, changeMonth, year ,events}) => {
    const handleNextMonth = (e) => {
        changeMonth(1);
    }

    const handlePreviousMonth = (e) => {
        changeMonth(-1);
    }

    return (
        <div className="month">
            <div className="changeMonth">
                <button onClick={handlePreviousMonth}>&lt;</button>
                <h3 class="subtitle is-3 has-text-white">{meses[month].name}</h3>
                <button onClick={handleNextMonth}>&gt;</button>  
            </div>
            <Days
                year={year}
                month={month}
                events={events}
            />
        </div>
    )
}
export default Month;