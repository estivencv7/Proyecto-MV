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
import { useNavigate } from "react-router-dom";
import iconLogout from '../../../Images/cerrarSesion.png';

export const NavHome = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    let [accessToken , setAccessToken] = useState("")
    let [user , setUser] = useState(null)
    const [nameUser , setNameUser] = useState("")
    const [stateUser , setStateUser] = useState(0)
    const [surnameUser , setSurnameUser] = useState("")
    const [emailUser , setEmailUser] = useState("")
    let navigate = useNavigate();
    const onHide = () => {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    let usuarioActivo = {
        nameU : nameUser,
        stateU : stateUser,
        surnameU : surnameUser,
        emailU : emailUser 
    }

    const catchEmail = (event) => {
        setEmail(event.target.value)
    }

    const obtenerDatosToken = (accessToken = "" ) => {

        if (accessToken != null && accessToken.length > 0) {
          return JSON.parse(atob(accessToken.split(".")[1]));
        }
        return null;
    }

    const guardarUsuario = (accessToken = "") => {

        let payload = obtenerDatosToken(accessToken);
        usuarioActivo.nameU = payload.nombre;
        usuarioActivo.emailU = payload.email;
        usuarioActivo.surnameU = payload.apellido;
        usuarioActivo.stateU = payload.Estado;
        sessionStorage.setItem("usuario", JSON.stringify(usuarioActivo))
        console.log("Usuario en el sesion storage " + sessionStorage.getItem("usuario"));
        console.log(usuarioActivo);
    }

    const catchToken = (token) => {
        if(token.nombre == "" || token.nombre == null){
            alert("Correo o contraseña incorrecto, Por favor verifique o registrese")
            navigate("/registerUser")
        }else{
            document.getElementById("logout").classList.remove("logoutHide")
            setAccessToken(token.access_token)
            if(token.Estado == 1){
                localStorage.setItem('user' , token.access_token)
                let tokenUser = localStorage.getItem('user')
                sessionStorage.setItem("token", token.access_token);
                document.getElementById("nameAccount").textContent = token.nombre
                console.log("TOKEN USER "  + tokenUser);
                guardarUsuario(token.access_token)
                navigate("/")
            }else {
                console.log("TOKEN PARA REGISTRAR EN ADMIN " + token.access_token);
                localStorage.setItem('admin' , token.access_token)
                let tokenAdmin = localStorage.getItem('admin')
                console.log("TOKEN ADMIN "  + tokenAdmin);
                navigate("/PageAdminMain" )
            }
        }    
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
        fetch(urlEndpoint ,  {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*' ,
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization':  'Basic ' + credenciales,
            },body : params.toString()
        })
        .then(response => response.json())
        .then(data => catchToken(data))
    }

    const logout = () => {
        console.log("TOKEN DE ACCESO " + accessToken);
        accessToken = null;
        usuarioActivo = null;
        // sessionStorage.clear();
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('token');
        document.getElementById("logout").classList.add("logoutHide")
        document.getElementById("nameAccount").textContent = "Mi Cuenta"
        alert("Sesion cerrada con exito")
      }
    
    const header = (
        <div className='div-login'>
            <h2>login</h2>
        </div>

    )

    //========================estas funciones estan explicadas en el servicio registrar producto
   
    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    const re=async()=>{
        setVisible2(false)
        await timeout( 1000)

        if(visible==false){
           
            setVisible2(true)
        }
    }
    //==================================================================

    useEffect(()=>{

    },[visible2])

    return (
        <nav className='icons'>
             
            <Link className='icon' to="/"><i className="pi pi-home ico" ><p  className='name-icon'> Inicio </p></i></Link>
            <ContentShoppingCart onHide={()=>setVisible2(false)} visible2={visible2} onClick={re} />

            <div className="cart-conten">
                <p className='cantidad-product' id='cantidad'></p> {/*Aqui va la cantidad de productos que llevamos en el carrito*/}
                <button className='icon' onClick={(e) => setVisible2(true)} ><i className="pi pi-shopping-cart ico"><p>Mi Carrito</p></i></button>
            </div>


            <div className='favoritos'>
                <button className='icon' onClick={() => onHide(onHide)} ><i className="pi pi-user ico"><p  className='name-icon' id='nameAccount'>Mi Cuenta</p></i></button>
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
            
            <div className='logoutHide' id='logout'>
                <button className='icon' onClick={logout}><i className='pi pi-sign-out ico'><p>Cerrar sesion</p></i></button>
            </div>
            
        </nav>

    )
}
