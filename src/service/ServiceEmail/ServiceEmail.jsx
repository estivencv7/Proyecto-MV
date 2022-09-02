import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { Button } from 'reactstrap';

export const ServiceEmail = ({ nameProduct ,nameProduct2 ,  descriptionProduct , priceProduct  , photoProduct,classN }) => {
    
    const [visible1, setVisible1] = useState(false)
    const [datePickup , setDatePickup] = useState("")

    function sendEmail() {
        console.log("ENTRO AL ENVIAR CORREO");
        const user = sessionStorage.getItem("usuario")
        const user2 = JSON.parse(user.toString());
        console.log(user2.nameU);
        console.log(user2.emailU);
        const URLEmail = "http://localhost:8080/producto/reservarProducto/" + user2.emailU + "/" + user2.nameU + "/" + datePickup
        let tokenUser = localStorage.getItem('user')
        console.log("TOKEN USER " + tokenUser);
        fetch(URLEmail, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization" : "Bearer " + tokenUser     
            },
            body: JSON.stringify({        
                codigo_producto : 1,
                nombre_producto: nameProduct,
                descripcion_producto: descriptionProduct,
                precio_producto: priceProduct,
                cantidad_producto : 1,
                foto_producto:photoProduct,
                id_categoria : {
                    id_categoria : 1,
                    nombre_categoria : "Mueble"
                },
                nombre_proveedor_producto : "Jhon"
            })
        }) 
            .then(response => response)
            .then(json => {
                if(json.ok){
                    alert("Reserva exitosa")
                }else{
                    alert("No se ha podido reservar el producto")
                }
            })
    }

    const open = () => {
        if (visible1 == false) {
            setVisible1(true)
        } else {
            setVisible1(false)
        }
    }
    
    const header3 = () => {
        return "Ingresa la fecha en la que puedas ir a ver el producto"
    }

    const catchDateBirthClient = (event) => {
        console.log(event.target.value);
        const fecha = new Date(event.target.value);
        const yearBirth = fecha.getFullYear();
        const monthBirth = fecha.getMonth() + 1;
        const dayBirth = fecha.getDate();
        const finalDateBirth = yearBirth + "-" + monthBirth + "-" + dayBirth
        setDatePickup(finalDateBirth)
    }
    
    return (
        <>
            <Button className={classN} onClick={() => open(open)}>Reservar</Button>
            <Dialog className='cuadro'  visible={visible1} style={{ width: '30%' }} style1={{ height: '30%' }} onHide={open} header={header3}>
                <Calendar id="date" name="date" onChange={e => catchDateBirthClient(e)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                <button onClick={sendEmail}>Reservar</button>
            </Dialog>
        </>
  )
}
