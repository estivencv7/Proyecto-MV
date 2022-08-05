import React from 'react'
import { Link } from 'react-router-dom'
import cama from '../../../Images/InventarioProductos.webp'
import './style.css'
export const ContentPageMainAdmin = () => {
    return (
        <div style={{display:'flex',gap:'120px'}}>
            <Link to='/crudProduc' >
                <div className='card-section'>
                    <img src={cama} width='100px'></img>
                    <p>Inventario Productos</p>
                </div>

            </Link>

            <Link to='/crudProduc' >
                <div className='card-section'>
                    <img src={cama} width='100px'></img>
                    <p>Inventario Productos</p>
                </div>

            </Link>
        </div>
    )
}
