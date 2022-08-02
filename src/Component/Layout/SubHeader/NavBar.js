import React, { useState,useEffect } from 'react'
import { Sidebar } from 'primereact/sidebar/';
import { Link } from 'react-router-dom'

import './style.css'
export const NavBar = () => {
    // const [click, setClick] = useState(false);
     const [button, setButton] = useState(true);
    const [visible, setVisible] = useState(false);
    const [navbar, setNavbar] = useState(true);
    let ubicacionPrincipal = window.pageYOffset;
    // const handleClick=()=>setClick(!click)
    // const closeMobileMenu=()=>setClick(false)
    const showButton=()=>{
        if(window.innerWidth<=960){
             setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton)
    
    const changeBackgroud=()=>{
        console.log("ttt", window.pageYOffset);
        let desplazamientoActual = window.pageYOffset;
        if(ubicacionPrincipal>=desplazamientoActual){
            setNavbar(true)
            console.log("hola ermen")
        }else {
            setNavbar(false)
        }
        ubicacionPrincipal = desplazamientoActual;
    }

    window.addEventListener('scroll',changeBackgroud)
    return (
        <>
        <nav className={navbar ? 'navbar active': 'navabar'} id='SubHeader'>
            <div className='navbar-container'>
                <Sidebar  className={navbar?'sidebar1': 'sunbNavLinkDisabled'} visible={visible} style={{ width: '23em' }} onHide={() => setVisible(false)} >
                <header><h1>Opciones</h1></header>

                </Sidebar>
                
                <div className="inf">
                    <button className={navbar ?'button-menu': 'sunbNavLinkDisabled'} onClick={(e) => setVisible(true)} >☰</button>
                    <span className="tool-text">
                        menu
                    </span>
                </div>

            
                <nav className='subNav'>
                    <Link className={ navbar? 'sunbNavLink': 'sunbNavLinkDisabled'} to="Quienes-Somos">Muebles</Link>
                    <Link className={ navbar? 'sunbNavLink': 'sunbNavLinkDisabled'} to="dudas-preguntas">Categorias</Link>
                    <Link className={ navbar? 'sunbNavLink': 'sunbNavLinkDisabled'} to="dudas-preguntas">Lo Nuevo</Link>
                
                </nav>
            </div>
      </nav>
        </>

        
  )
}
