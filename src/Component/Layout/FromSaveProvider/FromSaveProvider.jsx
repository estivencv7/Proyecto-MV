import React,{useState,useEffect} from 'react'
import { FormGroup} from 'reactstrap'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import './FromSaveProvider.css'

export const FromSaveProvider = ({onChange1,onChange2,onchange3,onchange4,onChange5}) => {

/*
    function listSuppliers() {
        console.log("LISTANDO PROVEEDORES 123")
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

    const createSelectElements = (supplierList) => {
        console.log( "entro a create elements",supplierList.length);
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

    useEffect(() => {
        listSuppliers()
    }, [listSuppliers.length])
*/
    return (
        
        <FormGroup className='cont-Register'>
            <div className='form'>
                
                <InputText className='input-register' onChange={onChange1} placeholder="Documento"/>
                <InputText className='input-register'onChange={onChange2} placeholder="Nombre"/>
                <InputText type='number' className='input-register'onChange={onChange5} placeholder="Telefono"/>
            </div>
            <div className='button-save-Product'>
                <Button onClick={onchange4}>Guardar</Button> 
                <Button onClick={onchange3}>Desacer</Button>
            </div>
        </FormGroup>
  )
}
