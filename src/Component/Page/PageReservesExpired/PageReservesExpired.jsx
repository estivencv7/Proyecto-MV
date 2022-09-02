import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button';
import '../../../service/ServiceReserve/ServiceReserve.css'



export const PageReservesExpired = () => {
  return (
    <Button className='PageReservesExpired'><Link to="/reservesExpired" className='ReservesExpired'>Ir a reservas expiradas</Link></Button>
  )
}
