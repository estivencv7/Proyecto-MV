import 'primeicons/primeicons.css';
import React, { useState, useEffect } from 'react'
import { Sidebar } from 'primereact/sidebar/';
// import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import './style.css'
import { Emblema } from '../../Ui/Logo/Emblema';
import { Service_ProductFilter } from '../../../service/ServiceProduct/Service_ProductFilter';
import { Service_ListProductFilter } from '../../../service/ServiceProduct/Service_ListProductFilter';
import { Categories } from '../../Ui/Categories/Chairs';
import { useNavigate } from 'react-router';

export const NavBar = () => {

    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [minimum2 , setMinimum]  = useState(0)
    const [maximum2 , setMaximum] = useState(1000000)
    const [codeCategory , setCodeCategory] = useState(0)
    let navigate = useNavigate()
    const catchMinimum = (event) => {
        console.log(event.target.value);
        setMinimum(event.target.value)
    }

    const catchMaximum = (event) => {
        console.log(event.target.value);
        setMaximum(event.target.value)
    }
    
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
        let desplazamientoActual = window.pageYOffset;
        if (ubicacionPrincipal >= desplazamientoActual) {
            setNavbar(true)
            
        } else {
            setNavbar(false)
        }
        ubicacionPrincipal = desplazamientoActual;
    }
    
    const catchCodeCategory = (category) => {
        console.log(category);
        if(category == "Salas"){
            navigate("/chairs")
        }else if(category == "Basecamas"){
            navigate("/baseBeds")
        }else if(category == "Muebles"){
            navigate("/furniture")
        }else if(category == "Colchones"){
            navigate("/mattresses")
        }else if(category == "Categorias"){
            navigate("/")
        }
    }
    window.addEventListener('scroll', changeBackgroud)
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navabar'} id='SubHeader'>
                <div className='navbar-container'>
                    <Sidebar className='sidebar1' visible={visible} onHide={() => setVisible(false)} >
                        <header className='header-sildebar1'>
                            <Emblema classN='emblema'></Emblema>
                        </header>
                        <hr></hr>
                        <div className='filtro'>
                            <p>---Filtrar por precio Maximo---</p>
                            <input className='filtro-Input' type="number" min={0} placeholder='Minimo' onChange={e => catchMinimum(e)}></input>
                           
                            <p>---Filtrar por precio Minimo---</p>
                            <input className='filtro-Input' type="number" max={10000000} placeholder='Maximo' onChange={e => catchMaximum(e)}></input>

                            <p>---Filtrar---</p>
                            <Service_ListProductFilter minimum={minimum2} maximum={maximum2}/>
                        </div>
                        <hr/>
                        <div>
                            <p>---Categorias---</p>
                            <select className='content-select' onChange={e => catchCodeCategory(e.target.value)} style={{width:'70%',height:'6%',textAlign:'center'}} inlist='Categoria' > 
                                <option>Categorias</option>
                                <option>Salas</option>
                                <option>Basecamas</option>
                                <option>Muebles</option>
                                <option>Armarios</option>
                            </select>
                        </div>
                        <hr/>

                    </Sidebar>

                    <div className="inf">
                        <button className={navbar ? 'button-menu pi pi-filter-fill' : 'sunbNavLinkDisabled'} onClick={(e) => setVisible(true)} >Filtrar</button>
                        {/* <span className="tool-text">
                            Filtrado
                        </span> */}
                    </div>


                    <nav className='subNav'>

                        <Button className={navbar ? 'sunbNavLink buttom1' : 'sunbNavLinkDisabled'} onClick={() => open(open)}>Contacto</Button>
                        <Dialog className='cuadro nav-cuadro'  visible={visible1}  onHide={open} header={header3}>
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
                        <Dialog  className='cuadro nav-cuadro' visible={visible2} onHide={open1} header={header2} >
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

                        

                    </nav>
                </div>
            </nav>
        </>


    )
}
