import React from 'react'

export const Service_ChangeStateReserve = ({code , text}) => {
    
    const changeState = () => {
        let tokenAdmin = localStorage.getItem("admin")
        const url = 'http://localhost:8080/reserva/cambiarEstadoReserva/' + code;
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
        <button onClick={changeState}>{text}</button>
    )
}
