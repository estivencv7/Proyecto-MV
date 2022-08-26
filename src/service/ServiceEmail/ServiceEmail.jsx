import React from 'react'

export const ServiceEmail = ({ nameProduct , descriptionProduct , priceProduct  , photoProduct}) => {
    
    function sendEmail() {
        console.log("ENTRO AL ENVIAR CORREO");
        const user = sessionStorage.getItem("usuario")
        const user2 = JSON.parse(user.toString());
        console.log(user2.nameU);
        console.log(user2.emailU);
        const URLEmail = "http://localhost:8080/producto/reservarProducto/" + user2.emailU + "/" + user2.nameU
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

    return (
        <div>
            <button onClick={sendEmail}>Reservar</button>
        </div>
  )
}
