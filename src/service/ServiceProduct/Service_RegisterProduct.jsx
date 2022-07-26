


import { useState } from 'react'
import { CrudProduct } from '../../Component/Layout/CrudProduct/CrudProduct'


export const ServiceProduct_Register = () => {

    const [idProduct, setIdProduct] = useState(0)
    const [name_product, setProduct] = useState("")
    const [descrition, setDescrition] = useState("")
    const [press, setPress] = useState(0)

    const catchName = (even) => {
        setProduct(even.target.value)
    }

    const catchId = (even) => {
        setIdProduct(even.target.value)
    }

    const catchDescrition = (even) => {
        setDescrition(even.target.value)
    }

    const catchPress = (even) => {
        setPress(even.target.value)
    }

    function registerProduct() {
        
        console.log("estoy registrando un producto")

        const urlRegister = 'http://localhost:8080/productos';

        fetch(urlRegister, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                codigo: idProduct,
                nombre: name_product,
                descripcion: descrition,
                precio: press
            })
        })
            .then(response => response)
            .then(json => check(json.ok))

    }

    function check(element) {
        if (element == true) {
            alert("Registro exitoso")
        } else {
            alert("hubo un error al momento de registrar")
        }
    }


    return (
        <div>
            {/* <FormRegisterProducts onChange1={catchId} onChange2={catchName} onChange3={catchDescrition}
                onChange4={catchPress} onClick={registerProduct} /> */}
            <CrudProduct onChange1={catchName} onChange2={catchDescrition} onChange3={catchPress}  onClick={registerProduct}/>
        </div>

    )



}
