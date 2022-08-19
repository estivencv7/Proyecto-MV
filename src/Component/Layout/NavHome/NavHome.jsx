import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar/';
import { Button } from 'primereact/button';
import './style.css'
// import { ListsCart } from '../../../service/ServiceCarrito/ListsCart';
import { get } from 'jquery';
import { Contador } from '../../../service/ServiceCarrito/Contador/Contador';
import { IteratCart } from '../ShoppingCart/IteratCart';
import Lista from './Lista';
import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito';
import { ContentShoppingCart } from '../ShoppingCart/ContentShoppingCart';

export const NavHome = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)

    const onHide = () => {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }


    // const onHide2 = () => {
    //     if (visible == false) {
    //         setVisible2(true)
    //     } else {
    //         setVisible2(false)
    //     }
    // }

    const catchEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    function login() {
        const urlEndpoint = 'http://localhost:8080/oauth/token';
        console.log("ENTRA AL LOGIN");
        const credenciales = btoa('reactapp' + ':' + '12345');
        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);
        params.append('grant_type', 'password');
        console.log("PARAMETROS " + params);
        console.log(credenciales);
        console.log(params.toString());
        let header = new Headers();
        // header.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        // header.set('Authorization', 'Basic ' + credenciales);
        fetch(urlEndpoint ,  {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*' ,
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization':  'Basic ' + credenciales,
            },body : params.toString()
        })
        .then(response => response.json())
        .then(data => console.log(data.access_token))
    }

    
    
    const header = (
        <div className='div-login'>
            <h2>login</h2>
        </div>

    )

    return (
        <nav className='icons'>
             
            <Link className='icon' to="/"><i className="pi pi-home ico" ><p  className='name-icon'> Inicio </p></i></Link>
            <ContentShoppingCart onHide={()=>setVisible2(false)} visible2={visible2}/>
            {/* <Sidebar position='right' visible={visible2} style={{ width: '40em' }} onHide={() => setVisible2(false)}>
                <h1>Carrito</h1>
                <ListsCart />
            </Sidebar> */}

            <div className="cart-conten">
                <p className='cantidad-product' id='cantidad'></p>
                <button className='icon' onClick={(e) => setVisible2(true)} ><i className="pi pi-shopping-cart ico"><p>Mi Carrito</p></i></button>
            </div>


            <div className='favoritos'>
                <button className='icon' onClick={() => onHide(onHide)} ><i className="pi pi-user ico"><p  className='name-icon'>Mi Cuenta</p></i></button>
            </div>
           
            <Dialog header={header} className='-login' visible={visible} modal onHide={onHide} style={{ width: '30%', height: '40%' }}>

                    <div className='content-login'>
                        <div>
                            <input className='inputs' type="email" onChange={e => catchEmail(e)} id='email' style={{ width: '20em' }} placeholder='email' />
                        </div>
                        <div>
                            <input className='inputs' type="password" id='password' onChange={e => setPassword(e.target.value)} placeholder='password' style={{ width: '20em' }} />
                        </div>
                    </div>
                    <div className='divLink'>
                        <Link to="/registerUser">¿No tienes una cuenta? Registrar</Link>
                        <div><Button className='button-login' onClick={login}>Iniciar Sesión</Button></div>
                    </div>

            </Dialog>

            <div className='favoritos'>
                <button className='icon'><i className='pi pi-heart heart-icon ico'> <p className='name-icon'>Favoritos</p></i></button>
            </div>
            
        </nav>

    )
}
