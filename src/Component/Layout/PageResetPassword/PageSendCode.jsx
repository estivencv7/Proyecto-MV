import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../PageResetPassword/PageResetPassword.css'

export const PageSendCode = () => {
    
    const [email , setEmail] = useState("");
    
    let navigate = useNavigate();

    const catchEmail = (event) => {
        setEmail(event.target.value)
    }

    function sendCode() {
        const URL = 'http://localhost:8080/clientes/recuperarContraseña/' + email;
        fetch(URL, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(categories => categories)
            navigate("/pageInsertCode")
    }

    return (
        <div className='recover-password'>
            <label htmlFor="">Ingrese el correo para reestablecer la contraseña</label>
            <InputText  onChange={catchEmail} type="text" placeholder='Correo' id='emailInput'/>
            <Button value="Enviar" onClick={sendCode}>Enviar</Button>
        </div>
    )
}
