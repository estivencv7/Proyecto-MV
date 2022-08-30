import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Service_ListReservesClient } from '../../../service/ServiceReserve/Service_ListReservesClient'

export const PageReservesClient = () => {
    
    let navigate =  useNavigate()
   
    const redirect = () => {
        navigate("/listReservesClient")
    }
    return (
        <div>
            <button onClick={redirect}>Mis reservas</button>
        </div>
  )
}
