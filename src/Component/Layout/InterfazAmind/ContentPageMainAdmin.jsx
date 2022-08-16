import React from 'react'
import { Link } from 'react-router-dom'
import cama from '../../../Images/inventarioP1.png'
import manos from '../../../Images/manos.png'
import carpetas from '../../../Images/carpetas.png'
import etiqueta from '../../../Images/etiqueta.png'
import './style.css'
export const ContentPageMainAdmin = () => {
    return (
        <div className='link-card' >
            <Link className='card-section' to='/crudProduc' >
                <img className='invetario-card' src={cama} width='170px' ></img>
                <p>Inventario Productos</p>
            </Link>

            <Link className='card-section' to='/registerProvider' >
                <img className='invetario-card' src={manos} width='140px'></img>
                <p>Inventario Proveedores</p>
            </Link>

            <Link className='card-section' to='' >
                <img className='invetario-card' src={carpetas} width='170px'></img>
                <p>Inventario Proveedores</p>
            </Link>
            <Link className='card-section' to='' >
                <i  className='invetario-card style pi pi-eye'></i>
                <p>vista de todos los productos</p>
            </Link>

           

        </div>
    )
}
