import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const PageInsertNewPassword = () => {
    
    const [newPassword , setNewPassword] = useState("");
    const [verifyNewPassword , setVerifyNewPassword] = useState("");
    let navigate = useNavigate()
    function insertNewPassword() {
        if(newPassword == verifyNewPassword){
            const URL = 'http://localhost:8080/clientes/actualizarContraseña/' + newPassword;
            fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(res => checkRes(res))
        }else{
            alert("LAS CONTRASEÑAS NO COINCIDEN")
        }
    }

    const checkRes = (result) => {
        console.log(result);
        if(result.cedula_cliente != "" || result.cedula_cliente != null){
            alert("Se ha modificado la contraseña con exito, Inicie sesion")
            navigate("/")
        }else{
            alert("Ha ocurrido un error")
        }
    }

    return (
        <div>
            <h3>Cambia tu contraseña</h3>
            <br />
            <label htmlFor="">Ingresa la nueva contraseña</label>
            <InputText type="password" onChange={e => setNewPassword(e.target.value)}/>
            <br /><br />
            <label htmlFor="">Confirma la contraseña</label>
            <InputText type="password" onChange={e => setVerifyNewPassword(e.target.value)}/>
            <br />
            <Button onClick={insertNewPassword}>Guardar</Button>
        </div>
    )
}
