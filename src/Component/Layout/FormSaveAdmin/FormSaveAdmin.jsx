import React,{useState,useEffect} from 'react'
import { FormGroup} from 'reactstrap'
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import './formAdmin.css'
import { InputText } from 'primereact/inputtext';
import { RadioGroup } from 'rsuite';
import { InputNumber } from 'primereact/inputnumber';
export const FormSaveAdmin = ({onChange1,onChange2,onChange3,onchange4}) => {

    return (
        
        <FormGroup className='cont-Register-admin'>
            <div className='form'>
                
                <InputText type='text' className='input-register' onChange={onChange1} placeholder="Nombre"/>
                <InputText type='text' className='input-register' onChange={onChange2} placeholder="Correo"/>
                <InputText type='text' className='input-register' onChange={onChange3} placeholder="Contraseña"/>
                
            </div>
            <div className='button-save-admin'>
                <Button onClick={onchange4}>Guardar</Button> 
            </div>
        </FormGroup>
  )
}
