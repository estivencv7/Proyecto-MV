import React,{useState} from 'react'

import { FormGroup} from 'reactstrap'
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

import './style.css'
export const FormSaveProduct = ({onChange1,onChange2,onchange3,onchange4}) => {

    return (
        
        <FormGroup className='cont-Register'>
            <div className='form'>
                
                <input type='text' className='input-register' onChange={onChange1} placeholder="Nombre"/>
                <InputTextarea type='' className='input-register'onChange={onChange2} placeholder="Descripcíon"/>
                
                <div className='cantidad'>
                    <input type='number' className='input-register inputpress' placeholder="$"/>
                    <input type='number' className='input-register inputpress' placeholder="cantidad"/>
                </div>
                <div className='pared'></div>
               
                <div className='category'>
                    
                    <div  className='content-bottom-radio'>
                        <label htmlFor="muebles">Mueble</label>
                        <input type='radio' id="muebles" className='bottom-radio'/>
                    </div>

                    <div className='content-bottom-radio'>
                        <label htmlFor="salas">Sala</label>
                        <input type='radio'  id='salas' className='bottom-radio'/>
                    </div>

                    <div className='content-bottom-radio'>
                        <label htmlFor="comedores">Comedores</label>
                        <input type='radio' id='comedores' className='bottom-radio'/>
                        
                    </div>

                    <div  className='content-bottom-radio'>
                        <label htmlFor="muebles">Mueble</label>
                        <input type='radio' id="muebles" className='bottom-radio'/>
                    </div>

                    <div className='content-bottom-radio'>
                        <label htmlFor="salas">Sala</label>
                        <input type='radio'  id='salas' className='bottom-radio'/>
                    </div>

                    <div className='content-bottom-radio'>
                        <label htmlFor="comedores">Comedores</label>
                        <input type='radio' id='comedores' className='bottom-radio'/>
                    </div>
                </div>
                <select name="provedor" id="" value=""  className='select-provedor'>
                    <option value="">Provedor</option>
                    <option  value="">postobon</option>
                    <option value="">muebleria 14</option>
                    <option value="">Provedor</option>
                    <option  value="">postobon</option>
                    <option value="">muebleria 14</option>
                    <option value="">Provedor</option>
                    <option  value="">postobon</option>
                    <option value="">muebleria 14</option>
                    <option value="">Provedor</option>
                    <option  value="">postobon</option>
                    <option value="">muebleria 14</option>
                </select>
                
            </div>

            <div className='button-save-Product'>
                <Button onClick={onchange4}>Guardar</Button> 
                <Button onClick={onchange3}>Desacer</Button>
            </div>
           
            
        </FormGroup>
  )
}
