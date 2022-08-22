import { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Dialog } from 'primereact/dialog'
import { Modal } from './Modal';
import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito';
// import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito';
// import { get } from 'jquery';
// import { Modal } from './Modal';
export const GetCards = ({ getCards = [], onClick }) => {

    // const [visible2, setVisible2] = useState(false);

    // const onHide = () => {

    //     if (visible2 == false) {
    //         setVisible2(true)
    //     } else {
    //         setVisible2(false)
    //     }
    // }
   
    return (
        <div className='conter_car'>
            {
                getCards.map((item, index,) => (
                    
                    <div key={index} >

                        {/* <div className='sud-content' > */}
                        <div className='car' style={{ position: 'relative' }}>
                            <button onClick={onClick} className='heart'><i className='pi pi-heart heart-icon'></i></button>
                            <div >

                                <img className='img-cardGif' src={item.foto_producto} alt="" />

                            </div>

                            <div>
                                <h2>{item.nombre_producto}</h2>
                            </div>
                            <hr />
                            <div className='content-press'>
                                <h2 className='press'>${item.precio_producto}</h2>

                                
                                <RegistrarCarrito  codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} imagenP={item.foto_producto} precioP={item.precio_producto}/>

                            </div>
                           
                            <div >
                                <Modal url={item.foto_producto} name={item.nombre_producto} description={item.descripcion_producto} press={item.precio_producto} />
                            </div>

                        </div>

                    </div>

                    // </div>
                    
                ))
            }
        </div>
    )
}
