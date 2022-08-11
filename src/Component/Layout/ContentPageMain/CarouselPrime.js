import React, { useEffect, useState } from 'react'
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { GetCards } from './GetCards';
import { Modal } from './Modal';

export const CarouselPrime = () => {

    const [product, setProduct] = useState([])
    // const [save, setSave] = useState([])

    const getProducts = () => {
        const url = 'http://localhost:8080/producto/listaProductos';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("esta es la sista que llega\n" + data)
                setProduct(data)
            })
    }

    useEffect(() => {
        getProducts()
        //saveObj.push(objProduct)
        //setProductFound(saveObj)
    }, [])

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    // const [save, setSave] = useState([])




    //   useEffect(() => {
    //       getProducts()
    //       //saveObj.push(objProduct)
    //       //setProductFound(saveObj)
    //   }, [])

    const productTemplate = () => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                   {
                    product.map((item) => (
                        // <div key={index}>
                            <img src={item.foto_producto} className='product-image'></img>
                        // </div>
                        
                    ))
                   } 

                        <div>
                            {/* <h2>{item.nombre_producto}</h2> */}
                        </div>
                        <hr />
                        <div className='content-press'>
                            {/* <h2>${item.precio_producto}</h2> */}
                            {/* <i className="pi pi-shopping-cart ico"></i> */}
                        </div>
                        {/* <Modal url={item.foto_producto} name={item.nombre_producto} description={item.descripcion_producto} press={item.precio_producto} /> */}
                    </div>




                </div>
            </div>
        )

    }

    return (
        <>
            <Carousel value={product} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
        </>

    )
}
