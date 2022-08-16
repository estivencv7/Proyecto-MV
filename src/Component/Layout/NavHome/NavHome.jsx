import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar/';
import { Button } from 'primereact/button';


import './style.css'
import { ListsCart } from '../../../service/ServiceCarrito/ListsCart';

export const NavHome = () => {

    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [cart, setCart] = useState([])
    const count = 0

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


    const getCart = async () => {
        if(cart==false){
            const response = await fetch('http://localhost:8080/carritoCompras/listarcarrito')
            const data = await response.json();
            setCart(data)
            console.log(data.length)
            count=data.length()
            return data.length
        }
       
       
    }
    
    useEffect(() => {
        getCart()
    },[cart])

    return (
        <nav className='icons'>
            <Link className='icon' to="/"><i className="pi pi-home ico" ></i></Link>
            <Sidebar position='right' visible={visible2} style={{ width: '40em' }} onHide={() => setVisible2(false)}>
                <h1>Carrito</h1>
                <ListsCart />
            </Sidebar>

            <div className="cart-conten" >
                {console.log("c"+count)}
                <p className='cantidad-product'>{cart.length}</p>
                <button className='icon' onClick={(e) => setVisible2(true)} ><i className="pi pi-shopping-cart ico"></i></button>
            </div>



            <button className='icon' onClick={() => onHide(onHide)} ><i className="pi pi-user"></i></button>
            <Dialog header={header} className='-login' visible={visible} modal onHide={onHide} style={{ width: '30%', height: '40%' }}>

                <form action="" className='form-login'>

                    <div className='content-login'>
                        <div>
                            <input className='inputs' type="email" id='email' style={{ width: '20em' }} placeholder='email' />
                        </div>
                        <div>
                            <input className='inputs' type="password" id='password' placeholder='password' style={{ width: '20em' }} />
                        </div>
                    </div>
                    <div className='divLink'>
                        <Link to="/registerUser">¿No tienes una cuenta? Registrar</Link>
                        <div><Button className='button-login'>Iniciar Sesión</Button></div>
                    </div>

                </form>
            </Dialog>
        </nav>

    )
}
