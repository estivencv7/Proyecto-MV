import 'primeicons/primeicons.css';
import React, { useState, useEffect } from 'react'
import { Sidebar } from 'primereact/sidebar/';
// import { Link } from 'react-router-dom'

import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import './style.css'
import { Emblema } from '../../Ui/Logo/Emblema';
export const NavBar = () => {

    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)

    const header = () => {
        return "Preguntas Frecuentes"
    }
    const header2 = () => {
        return "Conocenos "
    }
    const header3 = () => {
        return "Infomacion"
    }

    const open = () => {
        if (visible1 == false) {
            setVisible1(true)
        } else {
            setVisible1(false)
        }
    }
    const open1 = () => {
        if (visible2 == false) {
            setVisible2(true)
        } else {
            setVisible2(false)
        }
    }
    const open2 = () => {
        if (visible3 == false) {
            setVisible3(true)
        } else {
            setVisible3(false)
        }
    }


    const [button, setButton] = useState(true);
    const [visible, setVisible] = useState(false);
    const [navbar, setNavbar] = useState(true);
    let ubicacionPrincipal = window.pageYOffset;

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    const changeBackgroud = () => {
        console.log("ttt", window.pageYOffset);
        let desplazamientoActual = window.pageYOffset;
        if (ubicacionPrincipal >= desplazamientoActual) {
            setNavbar(true)
            console.log("hola ermen")
        } else {
            setNavbar(false)
        }
        ubicacionPrincipal = desplazamientoActual;
    }

    window.addEventListener('scroll', changeBackgroud)
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navabar'} id='SubHeader'>
                <div className='navbar-container'>
                    <Sidebar className='sidebar1' visible={visible} style={{ width: '23em' }} onHide={() => setVisible(false)} >
                        <header className='header-sildebar1'>
                            <Emblema classN='emblema'></Emblema>
                        </header>
                        <hr></hr>
                        <div className='filtro'>
                            <p>---Filtrar por precio Maximo---</p>
                            <input className='filtro-Input' type="number" placeholder='Maximo'></input>
                           
                            <p>---Filtrar por precio Minimo---</p>
                            <input className='filtro-Input' type="number" placeholder='Minimo'></input>
                        </div>
                        <hr/>
                        <div>
                            <p>---Categorias---</p>
                            <select className='content-select'  style={{width:'70%',height:'6%',textAlign:'center'}} inlist='Categoria' > 
                                <option>Categorias</option>
                                <option>Salas</option>
                                <option>Basecamas</option>
                                <option>Muebles</option>
                                <option>Colchones</option>
                            </select>
                        </div>
                        <hr/>
                       


                    </Sidebar>

                    <div className="inf">
                        <button className={navbar ? 'button-menu pi pi-filter-fill' : 'sunbNavLinkDisabled'} onClick={(e) => setVisible(true)} ></button>
                        <span className="tool-text">
                            Filtrado
                        </span>
                    </div>


                    <nav className='subNav'>

                        <Button className={navbar ? 'sunbNavLink buttom1' : 'sunbNavLinkDisabled'} onClick={() => open(open)}>Contacto</Button>
                        <Dialog className='cuadro'  visible={visible1} style={{ width: '30%' }} style1={{ height: '30%' }} onHide={open} header={header3}>
                            <h1 className='contacto'>CONTACTANOS</h1>
                            <p className='informacion'>
                                Estamos ubicados en la Carrera 17 #21-46 <br />
                                Horario desde la 8:00 am hasta las 6:30pm <br />
                                Telefono: 3117969946 <br />
                                No abrimos los dias Domingos ni los dias Festivos <br />
                                Si quiere informacion mas detalla comuniquese al numero ya antes escrito
                            </p>
                        </Dialog>

                        <Button className={navbar ? 'sunbNavLink buttom1' : 'sunbNavLinkDisabled'} onClick={() => open1(open1)}>Quienes Somos</Button>
                        <Dialog  className='cuadro' visible={visible2} style={{ width: '30%' }} style1={{ height: '30%' }} onHide={open1} header={header2} >
                            <h1 className='quienes'>QUIENES SOMOS</h1>
                            <p className='texto'>
                                Muebles Valencia es un empreza ubicada en la carrera 17 zona centrica,dedicada a la venta de  producto para el hogar tipo:<br />
                                ~Armarios<br />
                                ~Comedor<br />
                                ~Salas<br />
                                ~Peinadores<br />
                                ~Camas<br />
                                ~Basecamas etc. <br />
                                fabricados en madera.Muebles Valencia lleva 1 año y 9 meses sirviendole a sus cliente
                            </p>
                        </Dialog>

                        <Button className={navbar ? 'sunbNavLink buttom1' : 'sunbNavLinkDisabled'} onClick={() => open2(open2)}>Ayuda</Button>
                        <Dialog className='cuadro'  visible={visible3} style={{ width: '30%' }} style1={{ height: '30%' }} onHide={open2} header={header}>
                            <h1 className='ayuda'>AYUDA</h1>
                            <div>
                                <p className='preguntas'>
                                    <span className='interogacion'>¿QUE MADERA ES? <br /></span>
                                    Todos o casi todos los productos que vendemos estan hechos de MDF(Madera del futuro).
                                </p>
                                <p className='preguntas1'>
                                    <span className='interogacion'>¿CUANTO TIEMPO DE GARANTÍA TIENE LE PRODUCTO? <br /></span>
                                    Dependiendo de los productos que combre pero casi siempre tiene un año de garantia <br />
                                    y para poder pedir la garantia tiene que ir con la factura del producto.
                                </p>
                                <p className='preguntas2'>
                                    <span className='interogacion'>¿TIENE TRANSPORTE HASTA SU CASA? <br /></span>
                                    Dependiendo de la ubicacion donde quiera mandar el producto <br />
                                    ahi o no ahi transporte.
                                </p>
                                <p className='preguntas3'>
                                    <span className='interogacion'>¿CUANTO TIEMPO SE LE DEMORA EL PRODUCTO? <br /></span>
                                    Dependiendo del producto se puede demorar entre 8 o 5 dias en hacerce el producto. <br />
                                </p>
                            </div>
                        </Dialog>

                    </nav>
                </div>
            </nav>
        </>


    )
}
