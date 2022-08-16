import React,{useState,useEffect} from 'react'
import { FormGroup} from 'reactstrap'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { RadioGroup } from 'rsuite';
import { InputNumber } from 'primereact/inputnumber';
import './FormSaveCategories.css'
export const FormSaveCategories = ({onChange2,onchange3,onchange4}) => {
    return (
        
        <FormGroup className='cont-Register'>
            <div className='form'>
                <InputText type='text' className='input-register'onChange={onChange2} placeholder="Nombre"/>
            </div>
            <div className='button-save-category'>
                <Button onClick={onchange4}>Guardar</Button> 
                <Button onClick={onchange3}>Desacer</Button>
            </div>
        </FormGroup>
  )
}
