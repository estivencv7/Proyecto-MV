import { Button } from 'primereact/button'
import React from 'react'
import './css/Style.css'
export const ServicieDeleteCart = () => {
  return (
    <div>
        <Button className='delete-product-cart'><i className='pi pi-trash delete'></i></Button>
    </div>
  )
}
