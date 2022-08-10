import { useState } from 'react'
import { Button } from 'primereact/button';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Dialog } from 'primereact/dialog'
import { Modal } from './Modal';
// import { get } from 'jquery';
// import { Modal } from './Modal';
export const GetCards = ({ getCards = [] }) => {

    const [visible, setVisible] = useState(false);

    const onHide = () => {

        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }



    return (
        <div className='conter_car'>
            {
                getCards.map((item, index,) => (
                    <div key={index} >

                        <div className='sud-content' >
                            <div className='car'>
                                <img className='img-cardGif' src={item.foto_producto} alt="" />
                            </div>
                            <div>
                                <h2>{item.nombre_producto}</h2>
                            </div>
                            <hr />
                            <div className='content-press'>
                                <h2>${item.precio_producto}</h2>
                                <i className="pi pi-shopping-cart ico"></i>
                            </div>
                            <Modal url={item.foto_producto} name={item.nombre_producto} description={item.descripcion_producto} press={item.precio_producto}/>
                        </div>

                    </div>

                ))
            }
        </div>
    )
}
