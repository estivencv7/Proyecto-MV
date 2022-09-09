
// import { set } from 'date-fns';
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React, { useState, useEffect } from 'react'
import { ServicieRegisterInventario } from './ServicieRegisterInvetario';
import{GiArchiveRegister} from 'react-icons/gi'
import './css/styleComing.css'
export const ServicieArriveProduct = ({cod}) => {


    const [productSearch , setProducts] = useState(null);
    const [visible, setVisible] = useState(false);
    const [esta, setEsta] = useState(false);

    // const [image, setImageProduct] = useState("");
    // const [loading, setLoading] = useState(true);
    // const [name_supplier_product, setNameSupplierProduct] = useState("")
    // const [code , setCodeProduct] = useState(0)
    // const [idCategory , setIdCategory] = useState(0)
    // const [nameCategory , setNameCategory] = useState("")
    // const [product, setProductos] = useState("")

    function searchProduct() {
        const urlRegister = 'http://localhost:8080/proximos/buscar/' + cod;
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(product => {
                if(product!=null){
                    setProducts(product)
                    setEsta(true)
                }
                
                console.log(product)
            })
        // setLoading(false)
    }

    const seew = () => {

        if (visible == false) {
            searchProduct()
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    return (
        <div>
            <Button onClick={() => seew(seew)} className={'button-book'}><GiArchiveRegister className='Book'/></Button>
            <Dialog visible={visible} modal onHide={seew} style={{ width: '30em', bordeRadius: '100%' }} className='dialogoRegisterProduct' >
            {esta==true? 
                    <div>

                    <h1>{cod}</h1>
                  {productSearch.nombre_producto!=null ? <p>{productSearch.nombre_producto}</p> :<p>Noy hay datos</p>}
                   <ServicieRegisterInventario code={productSearch.codigo} nameP={productSearch.nombre_producto} descriptionP={productSearch.descripcion} imgP={productSearch.imagen_producto}></ServicieRegisterInventario>
                </div>
                :
                <div>
                    
                </div>
            }
            </Dialog>
        </div>
    )
}
