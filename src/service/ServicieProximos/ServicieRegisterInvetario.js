import React, { useState } from 'react'
import { FormSaveProduct } from '../../Component/Layout/FormSaveProduct/FormSaveProduct';
import { Dialog } from 'primereact/dialog';
import { Button, } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toaster, toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router'
// import './css/registerProduct.css'
export const ServicieRegisterInventario = ({ style, code, nameP, descriptionP,imgP}) => {

    // let navigate = useNavigate()
    // const [visible, setVisible] = useState(false)
    // const [image, setImageProduct] = useState("");
    // const [loading, setLoading] = useState(true);
    // const [name_product, setNameProduct] = useState("")
    // const [name_supplier_product, setNameSupplierProduct] = useState("")
    // const [description, setDescriptionProduct] = useState("")
    // const [price, setPriceProduct] = useState(0)
    // const [code , setCodeProduct] = useState(0)
    // const [amount , setAmountProduct] = useState(0)
    // const [idCategory , setIdCategory] = useState(0)
    // const [nameCategory , setNameCategory] = useState("")





    // const catchNameProduct = (even) => {
    //     setNameProduct(even.target.value)
    // }

    // const catchNameSupplierProduct = (even) => {
    //     setNameSupplierProduct(even)
    // }

    // const catchDescriptionProduct = (even) => {
    //     setDescriptionProduct(even.target.value)
    // }

    // const catchCodeProduct = (even) => {
    //     setCodeProduct(even.target.value)
    // }

    // const catchPriceProduct = (even) => {
    //     setPriceProduct(even.value)
    // }

    // const catchAmountProduct = (even) => {
    //     setAmountProduct(even.value)
    // }


    function registerProduct() {
        console.log("estoy registrando un producto")
        // console.log(price)
        // console.log(amount)
        const urlRegister = 'http://localhost:8080/producto';
        let tokenAdmin = localStorage.getItem('admin')
        if (tokenAdmin == "" || tokenAdmin == null) {
            alert("Por favor registrese")
        } else {
            fetch(urlRegister, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + tokenAdmin
                },
                body: JSON.stringify({
                    codigo_producto: null,
                    nombre_producto: nameP,
                    descripcion_producto: descriptionP,
                    precio_producto: 0,
                    foto_producto: imgP,
                    id_categoria: {
                        id_categoria: null,
                        nombre_categoria: null
                    },
                    nombre_proveedor_producto: null
                })
            })
                .then(response =>{
                    if(response.status==201){
                        deleteProximo(code)
                    }
                })
            // .then(json => check(json.ok))
            // console.log(name_supplier_product);
        }
    }
    // if(response.status==201){
    //     toast("Save ")
    // }

    function deleteProximo(cod) {
        const urlRegister = 'http://localhost:8080/proximos/eliminarProximos/' + cod;
        fetch(urlRegister, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
        // .then(product => {
        //     // guardarProduc(product)
        //     console.log(product)
        // })
        // setLoading(false)
    }

    function check(element) {
        if (element == true) {
            // <Toaster reverseOrder={true} toastOptions={{

            // }} />
            // navigate("/registerProduct")
            alert("Registro exitoso")
        } else {
            alert("hubo un error al momento de registrar")
        }
    }



    const header = (
        <div className='div-login'>
            Registrar Producto
        </div>
    )

    return (

        <Button className='' onClick={registerProduct} code nameP descriptionP imgP ><i className='pi pi-save'></i></Button>


    )
}
