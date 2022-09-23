import React from 'react'
import './ServiceReserve.css'
export const Service_ChangeStateReserve = ({code , text}) => {
    
    const changeState = () => {
        let tokenAdmin = localStorage.getItem("admin")
        const url = 'https://muebleriaback.herokuapp.com/reserva/cambiarEstadoReserva/' + code;
        fetch(url, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                "Authorization" : "Bearer " + tokenAdmin
            }
        })
            .then(response => response.json())
            .then(reserve => console.log(reserve))
    }

    return (
        <button onClick={changeState} className='btnChangeState'>{text}</button>
    )
}
