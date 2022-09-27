import React from 'react'

export const ServiceEnableProduct = ({id , text}) => {
    
    const enableOrDisable = () => {
        const URL = "http://localhost:8080/producto/habilitarProducto/" + id
        fetch(URL , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => check(json.ok))
    }

    function check(element) {
        if (element == true) {
            alert("Actualizacion exitosa")
        } else {
            alert("hubo un error al momento de actualizar")
        }
    }

  return (
    <div>
        <button onClick={enableOrDisable}>{text}</button>
    </div>
  )
}
