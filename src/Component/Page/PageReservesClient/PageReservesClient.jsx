import { Dialog } from 'primereact/dialog'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
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
