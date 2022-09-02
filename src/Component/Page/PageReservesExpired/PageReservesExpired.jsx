import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap';
import '../../../service/ServiceReserve/ServiceReserve.css'


export const PageReservesExpired = ({text}) => {
  
  let navigate = useNavigate()
  const redirec = () => {
    navigate("/reservesExpired")
  }
  
  return (
    <Button className='PageReservesExpired' onClick={redirec}>{text}</Button>
  )
}
