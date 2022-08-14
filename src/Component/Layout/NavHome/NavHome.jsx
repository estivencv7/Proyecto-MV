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




    const vandera = 0
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [cart, setCart] = useState([])
    const [bandera, setBandera] = useState(0)
    const [value, setValue] = useState("");

    const onHide = () => {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }


    const onHide2 = () => {
        if (visible == false) {
            setVisible2(true)
        } else {
            setVisible2(false)
        }
    }


    const header = (
        <div className='div-login'>
            <h2>login</h2>
        </div>

    )


    const getCart = async () => {
        // peticion()



    }

    // const peticion=async()=>{
    //     console.log("hola pasos")
    //     const response = await fetch('http://localhost:8080/carritoCompras/listarcarrito')
    //     const data = await response.json();
    //     setCart(data)
    //     const l=new Lista();

    //     setBandera(data.length)

    //     return data.length

    // }



    // useEffect(() => {
    //     // if(bandera!=cart.length){
    //     //     peticion()
    //     //     console.log("paso idf")
    //     //     console.log("cart="+cart.length +",Bandera="+bandera)
    //     // }else{

    //     // }

    // },[])

    // function timeout(ms) {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    // }

    // useEffect(() => {
    //     let isCancelled = false;

    //     const handleChange = async () => {
    //         console.log("hola pasos")
    //         const response = await fetch('http://localhost:8080/carritoCompras/listarcarrito')
    //         const data = await response.json();
    //         console.log(response.status)
    //         setCarrito(data)
    //         // setBandera(data.length)
    //         // setCarrito(data)
            
    //         console.log("uno" + bandera)
    //         // await timeout(1000);
    //         // let i = data.length;
    //         // while(i<=carrito.length){
    //         //     setBandera(i)
    //         //     i+=i
    //         // }

    //         // if (!isCancelled) {
    //         //     // alert(`A name was changed: ${carrito.length}`);
    //         //    console.log("blucle")
    //         //    console.log("dos"+bandera)
    //         //    setBandera(data.length)
    //         // }
    //     };

    //     // handleChange();
    //     // //Cleanup function is called when useEffect is called again or on unmount
    //     // return () => {
    //     //     isCancelled = true;
    //     //     console.log("paso")
    //     //     setBandera(carrito.length)
    //     //     console.log("tres" + bandera)
    //     // };
    // }, [bandera]);



    return (
        <nav className='icons'>
             
            <Link className='icon' to="/"><i className="pi pi-home ico" ></i></Link>
            <ContentShoppingCart onHide={()=>setVisible2(false)} visible2={visible2}/>
            {/* <Sidebar position='right' visible={visible2} style={{ width: '40em' }} onHide={() => setVisible2(false)}>
                <h1>Carrito</h1>
                <ListsCart />
            </Sidebar> */}

            <div className="cart-conten">
                <p className='cantidad-product' id='cantidad'></p>
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
