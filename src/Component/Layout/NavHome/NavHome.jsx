import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar/';
import { Button } from 'primereact/button';


import './style.css'

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

    const header = (
        <div className='div-login'>
            <h2>login</h2>
        </div>

    )

    return (
        <nav className='icons'>
            <Link className='icon' to="/"><i className="pi pi-home ico" ></i></Link>
            <Sidebar position='right' visible={visible2} style={{ width: '30em' }} onHide={() => setVisible2(false)}>

            </Sidebar>

            <div className="cart-conten">
                <p className='cantidad-product'>0</p>
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
