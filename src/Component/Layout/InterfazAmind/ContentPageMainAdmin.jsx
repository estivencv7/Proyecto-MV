import React from 'react'
import { Link } from 'react-router-dom'
import inventario from '../../../Images/inventario1.jpg'
import manos from '../../../Images/manos.png'
import carpetas from '../../../Images/carpetas.png'
import etiqueta from '../../../Images/etiqueta.png'
import './style.css'
export const ContentPageMainAdmin = () => {
    return (
        <div className='link-card' >
            <Link className='card-section' to='/registerProduct' >
                <img className='invetario-card' src={inventario} width='200px' ></img>
                <p>Inventario Productos</p>
            </Link>

            <Link className='card-section' to='/registerProvider' >
                <img className='invetario-card' src={manos} width='140px'></img>
                <p>Inventario Proveedores</p>
            </Link>

            <Link className='card-section' to='/registerCategories' >
                <img className='invetario-card' src={carpetas} width='170px'></img>
                <p>Inventario Categorias</p>
            </Link>
            <Link className='card-section' to='' >
                <i  className='invetario-card style pi pi-eye'></i>
                <p>vista de todos los productos</p>
            </Link>

           

        </div>
    )
}
