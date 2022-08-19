import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { NavHome } from '../NavHome/NavHome'
import { Sidebar } from 'primereact/sidebar/';
import { Emblema } from '../../Ui/Logo/Emblema'
import './NavigationAdmin.css'

export const NavigationAdmin = () => {

    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [nameAdmin , setNameAdmin] = useState("")

    const onHide = () => {
        if (visible == false) {
            buscarAdminRegistrado()
            setVisible(true)
        } else {
            buscarAdminRegistrado()
            setVisible(false)
        }
    }

    const header = (
        <div className='div-login'>
            <h2>login</h2>
        </div>

    )
    const obtenerDatosToken = (accessToken = "" ) => {

        if (accessToken != null && accessToken.length > 0) {
          return JSON.parse(atob(accessToken.split(".")[1]));
        }
        return null;
    }

    const buscarAdminRegistrado = () => {
        let tokenAdmin = localStorage.getItem('admin')
        console.log(tokenAdmin);
        let payload = obtenerDatosToken(tokenAdmin);
        console.log("PAYLOAD EN ADMIN " + payload);
        setNameAdmin(payload.nombre)
        console.log(nameAdmin);
    }

  return (
    <div className='header-admin'>
      <header className='header-navegation'>
      <div className='navegationAdmin'>
          <Emblema classN="title-admin" />
          <nav className='icons'>
            <Link className='iconAdmin' to="/PageAdminMain"><i className="pi pi-home ico" ></i></Link>
            <button className='iconAdmin' onClick={() => onHide(onHide)} ><i className="pi pi-user"></i>{nameAdmin}</button>
        </nav>
        </div>
        <div className='paredAdmin'></div>
        </header>
    </div>
  )
}
