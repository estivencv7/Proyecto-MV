import React,{useState , useEffect} from 'react'
import Select from 'react-select'
import { FormGroup} from 'reactstrap'
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import './style.css'
import { RadioGroup } from 'rsuite';
export const FormSaveProduct = ({onChange1,onChange2,onchange3,onchange4,onChange5,onChange6,onChange7}) => {

    let [category , setCategory] = useState(0);
    const [suppliers , setSuppliers] = useState([]);
    
    const SuppliersSelect = () => (
      <Select options={suppliers} />
    )

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
            .then(supplier => setSuppliers(supplier))
            console.log(suppliers);
    }

    let i = suppliers.length;
    useEffect(() => {
        listSuppliers()
    }, [i])
    

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
            <div className='selectContainer'>
                <SuppliersSelect ></SuppliersSelect>
            </div>
            <div className='button-save-Product'>
                <Button onClick={onchange4}>Guardar</Button> 
                <Button onClick={onchange3}>Desacer</Button>
            </div>
        </FormGroup>
  )
}
