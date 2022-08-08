import React from 'react'
import {AutoComplete}from 'rsuite'
import './style.css'
export const InputHeader = () => {
  const names=[
    
      "muebles",
      "salas",
      "comedores",
      "armarios",
      "peinadores",
      "fruteros",
      "base camas",
      "mesas",
      "sillas"
    
    
  ]
  
  return (
    <div className='input-wrapper'>
      <i className="pi pi-search input-icon"></i>
     <AutoComplete placeholder='¿Qué estás buscando?' className='autoInput' data={names}></AutoComplete>
    </div>
  )
}
