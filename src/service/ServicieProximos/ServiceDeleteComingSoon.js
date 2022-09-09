import React from 'react'
import { Button } from 'rsuite';
import {AiFillDelete} from 'react-icons/ai'
import './css/styleComing.css'

export const ServiceDeleteComingSoon = ({cod}) => {
     
    function deleteComingSoon () {
        const urlRegister = 'http://localhost:8080/proximos/eliminarProximos/' + cod;
        fetch(urlRegister, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            
     }
  return (
   <Button className='button-book' onClick={deleteComingSoon} cod><AiFillDelete className='Book'/></Button>
  )
}
