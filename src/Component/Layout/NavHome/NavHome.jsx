import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar/';
import { Button } from 'primereact/button';
import { Logo } from '../../Ui/Logo/Logo';
// import wardrobe from '../../../Images/armario.jpeg'
// import bed from '../../../Images/cama2.PNG'
//import './NavHome.css'

export const NavHome = () => {

    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)

    const onHide = () => {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const header=(
        <div className='div-login'>
            <Logo classN='title-login' text='Inicio Sesión'/>
       </div>
       
    )
   
    return (
        <nav className='icons'>
            <Link className='icon' to="/"><i className="pi pi-home ico" ></i></Link> 
            <Sidebar position='right' visible={visible2} style={{ width: '30em' }} onHide={() => setVisible2(false)}>
               
            </Sidebar>
           
            <div className="inf">
                <button className='icon'  onClick={(e) => setVisible2(true)} ><i className="pi pi-shopping-cart ico"></i></button>
              
            </div>

       
            
            <button className='icon' onClick={() => onHide(onHide)} ><i className="pi pi-user"></i></button>
            <Dialog header={header}   className='dialogo-login' visible={visible} style={{ width: '30em', height: '22em'}} modal onHide={onHide}>
               
                <form action="" className='form-login'>
                  
                    <div className='content-login'>
                        <input type="email" id='email' style={{ width: '20em', height: '32px' }} placeholder='email' />
                        <input type="password" id='password' placeholder='password' style={{ width: '20em', height: '32px' }} />
                        
                    </div>
                    <div><Button className='button-login'>Iniciar Sesión</Button></div>
                    
                   
                    <Link  to="/registerUser">¿No tienes una cuenta? Registrar</Link>
                </form>
            </Dialog>
        </nav>

    )
}
