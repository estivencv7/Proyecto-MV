import { useState } from 'react'
import { CrudProduct } from '../../Component/Layout/CrudProduct/CrudProduct'

import { Container,FormGroup,Input} from 'reactstrap'
export const ServiceProduct_Register = () => {

    //==========Cloudinary=======================================
    
    //=========================
    
    const [idProduct, setIdProduct] = useState(0)
    const [name_product, setProduct] = useState("")
    const [descrition, setDescrition] = useState("")
    const [press, setPress] = useState(0)
    const [foto, setFoto] = useState("")

    const catchName = (even) => {
        setProduct(even.target.value)
    }

    const getfoto= (even) => {
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
                presio: press,
                foto:""
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
            <CrudProduct onChange1={catchName} onChange2={catchDescrition} onChange3={catchPress}  onClick={registerProduct} onChange5={getfoto} />
        </div>

    )



}
