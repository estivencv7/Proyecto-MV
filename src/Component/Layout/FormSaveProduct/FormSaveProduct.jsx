import React,{useState} from 'react'
import { FormGroup} from 'reactstrap'
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import './style.css'
import { RadioGroup } from 'rsuite';
export const FormSaveProduct = ({onChange1,onChange2,onchange3,onchange4,onChange5,onChange6,onChange7,onChange8}) => {

    let [category , setCategory] = useState(0);
    const catchValue1 = () => {
        let cat = document.getElementById("mueble").value;
        setCategory(cat)
        onChange7(cat)
        console.log(cat);
    }

    const catchValue2 = () => {
        let cat = document.getElementById("silla").value;
        setCategory(cat)
        console.log(cat);
        onChange7(cat)
    }
    
    function listSuppliers() {
        console.log("LISTANDO PROVEEDORES")
        const urlRegister = 'http://localhost:8080/proveedores/listaProveedores';
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(supplier => createSelectElements(supplier))
    }

    function checkSuppliers(){
        while(document.getElementById('selectContainer').lastChild){
          document.getElementById('selectContainer').removeChild(document.getElementById('selectContainer').lastChild)
        }
        listSuppliers();
      }

    const createSelectElements = (supplierList) => {
        console.log(supplierList.length);
        let i = 0;
        const selectContainer = document.getElementById("selectContainer");
        const optionSelect = document.createElement("option")
        optionSelect.textContent = "Seleccione un proveedor";
        optionSelect.setAttribute("value","")
        selectContainer.appendChild(optionSelect)
        while(i <= supplierList.length){
            supplierList.forEach(element => {
                const optionSelect = document.createElement("option")
                console.log("ELEMENT: " + element.nombre_proveedor);
                optionSelect.textContent = element.nombre_proveedor;
                optionSelect.setAttribute("value",element.nombre_proveedor)
                // optionSelect.setAttribute("onClick",catchSupplierName(optionSelect))
                selectContainer.appendChild(optionSelect)
                i++
            })
            break;
        }
    }

    return (
        
        <FormGroup className='cont-Register'>
            <div className='form'>
                
                <input type='text' className='input-register' onChange={onChange1} placeholder="Nombre"/>
                <InputTextarea type='' className='input-register'onChange={onChange2} placeholder="Descripcíon"/>
                
                <div className='cantidad'>
                    <input type='number' className='input-register inputpress' placeholder="$" onChange={onChange5}/>
                    <input type='number' className='input-register inputpress' placeholder="cantidad" onChange={onChange6}/>
                </div>
                <div className='pared'></div>
               
                <div className='category'>
                    <RadioGroup >
                        <input type="radio" id='mueble' name="productos" value={1} onClickCapture={catchValue1}/>Muebles
                        <br />
                        <input type="radio" id='silla' name="productos" value={2} onClickCapture={catchValue2}/>Sillas
                    </RadioGroup>  
                </div>          
            </div>
            <div>
                <select id='selectContainer' onChange={e => onChange8(e.target.value)} onClick={checkSuppliers} >

                </select>
            </div>
            <div className='button-save-Product'>
                <Button onClick={onchange4}>Guardar</Button> 
                <Button onClick={onchange3}>Desacer</Button>
            </div>
        </FormGroup>
  )
}
