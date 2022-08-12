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

    const onHide = () => {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const header = (
        <div className='div-login'>
            <h2>login</h2>
        </div>

    )


    const getCart = async() => {
        const response= await fetch('http://localhost:8080/carritoCompras/listarcarrito')
        const data = await response.json();
        setCarrito(data)
        return data;
        // const url = 'http://localhost:8080/carritoCompras/listarcarrito';
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         setCarrito(data)
        //     })
    }

    const savelLength=()=>{
        getCart()
    }

    useEffect(() => {
        savelLength()
    }, [])

  return (
    <div className='header-admin'>
      <header className='header-navegation'>
      <div className='navegationAdmin'>
          <Emblema classN="title-admin" />
          <nav className='icons'>
            <Link className='iconAdmin' to="/PageAdminMain"><i className="pi pi-home ico" ></i></Link>
            <button className='iconAdmin' onClick={() => onHide(onHide)} ><i className="pi pi-user"></i></button>
        </nav>
        </div>
        </header>
    </div>
  )
}
