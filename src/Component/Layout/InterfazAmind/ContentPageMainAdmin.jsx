import React from 'react'
import { Link } from 'react-router-dom'
// import inventario from '../../../Images/inventario1.jpg'
import manos from '../../../Images/manos.png'
import carpetas from '../../../Images/carpetas.png'
// import etiqueta from '../../../Images/etiqueta.png'
// import {MdOutlineInventory} from 'react-icons';
import { MdInventory2, MdOutlineEventNote, MdPerson } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa"
import {MdCategory } from "react-icons/md"
import {BsCloudUploadFill} from "react-icons/bs"
import {GrUserSettings} from "react-icons/gr"
import {VscBook} from "react-icons/vsc"
import './style.css'

export const ContentPageMainAdmin = () => {
    return (
        <div className='link-card' >
            <Link className='card-section' to="/tableAdmins">
                <div className='MdInventory2'>
                    <MdPerson className='inventariosproductos' stroke='' fill=''/>
                </div>
                <h2>Gestion Administradores</h2>
                    <p>Gestione los administradores Registre,Busque ,Actualice y Elimine con gran facilidad.
                </p>
            </Link>
            <Link className='card-section' to='/registerProduct' >
               
                <div className='MdInventory2'>
                <MdInventory2 className='inventariosproductos' stroke='' fill=''/>
                </div>
                <h2>Inventario Productos</h2>
                    <p>Maneje el Invetario de sus productos Registre,Busque ,Actualice y Elimine con gran facilidad.
                </p>
            </Link>

            <Link className='card-section' to='/registerProvider' >
               
                <div  className='MdInventory2'>
                    <FaPeopleCarry className='inventariosproductos'/>
                </div>
                <h2>Inventario Proveedores</h2>
                <p>Ten un manejo de los Proveedores como sus datos y maneje el inventario y las operaciones respectivas.</p>
            </Link>

            <Link className='card-section' to='/registerCategories' >
              
                <div className='MdInventory2' >
                    <MdCategory  className='inventariosproductos'/>
                </div>
                <h2>Inventario Categorias</h2>
                <p>Separe por Categorias sus productos aqui puede manejar el Inventario de categorias.</p>
            </Link>
            
            <Link className='card-section res' to='/listReserves' >
               
                <div className='MdInventory2'>
                <MdOutlineEventNote className='inventariosproductos' stroke='' fill=''/>
                </div>
                <h2>Gestion Reservas</h2>
                    <p>Maneje las reservas de sus productos Registre,Busque ,Actualice y Elimine con gran facilidad.
                </p>
            </Link>
            {/* <Link className='card-section' to='' >
                <i  className='invetario-card style pi pi-eye'></i>
                <p className='colorP'>vista de todos los productos</p>
            </Link> */}  

             <Link className='card-section res' to='/registerProximo'>
               
                <div className='MdInventory2'>
                <BsCloudUploadFill className='inventariosproductos' stroke='' fill=''/>
                </div>
                <h2>Próximos Lanzamientos</h2>
                    <p>Aqui prodras manejar los registro de los productos que estan por llegar a la muebleria.
                </p>
            </Link>      
        </div>
    )
}
