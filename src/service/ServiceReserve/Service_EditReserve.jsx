import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioGroup } from 'rsuite';
import { InputNumber } from 'primereact/inputnumber';
import {FaUserEdit} from 'react-icons/fa'
import '../ServiceProduct/css/registerProduct.css'

export const Service_EditReserve = ({codeReserve}) => {

    const [visible, setVisible] = useState(false);
    const [image, setImageProduct] = useState("");
    const [loading, setLoading] = useState(true);
    const [name_supplier_product, setNameSupplierProduct] = useState("")
    const [codeR , setCodeReserve] = useState(0)
    const [reserve, setReserve] = useState("")
    const [dateReserve , setDateReserve] = useState("")

    function searchReserve () {
        const urlRegister = 'http://localhost:8080/reserva/buscarReservaIndividual/' + codeReserve;
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(reserveReturn => saveReserve(reserveReturn))
        setLoading(false)
    }    

    const saveReserve = (reserv) =>{
        setReserve(reserv)
        setCodeReserve(reserv.codigo_reserva)
        setDateReserve(reserv.fecha_creacion_reserva)
        setImageProduct(reserv.foto_producto_reserva)
    }
    
       const seew=()=>{
       
        if (visible == false) {
            searchReserve()
            setVisible(true)
        } else {
            setVisible(false)
        } 
    }

    function editReserve() {
        console.log("estoy editando una reserva")
        const idClientReserve = document.getElementById("inputId").value
        const nameClientReserve = document.getElementById("inputName").value
        const datePickupReserve = document.getElementById("inputPickup").value
        console.log(nameClientReserve);
        const urlRegister = 'http://localhost:8080/reserva/editarReserva/' + codeReserve;
            fetch(urlRegister, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    codigo_reserva : codeR,
                    cedula_cliente_reserva : idClientReserve,
                    fecha_creacion_reserva: dateReserve,
                    fecha_recoger_reserva: datePickupReserve,
                    foto_producto_reserva : image,
                    nombre_cliente_reserva:nameClientReserve,
                })
            })
                .then(response => response.json())
                .then(json => {
                    if(json.ok){
                        alert("Actualizacion Exitosa")
                    }else{
                        alert("Actualizacion Exitosa")
                    }
                })
    }

    const header=(
        <div className='div-update'>
           Editar Reserva
       </div>
    )
    /*<div id='dataProductsContainer' className='dataProductsContainer'></div>
    <div className='barra-desplegable'>
    */
  return (
    <>
        <Button className='button-book' onClick={()=>seew(seew)}><FaUserEdit className='Book'/></Button>
        <Dialog header={header} visible={visible} modal onHide={seew} style={{ width: '30em',bordeRadius:'100%'}} className='dialogoRegisterProduct' >     
            <div className='content-image'>
            
                <div className='cont-update'>     
                
                    <div className='form'>
                        <InputText id='inputName' type='text' className='input-update' placeholder={reserve.nombre_cliente_reserva}/>
                        <InputText id='inputId' type='' placeholder={reserve.cedula_cliente_reserva}/>    
                        <InputText id='inputPickup' type='date' className='input-update'/>
                    </div>
                    <div className='content-Input-file'>
                        {loading ? (<h3>cargando imagen</h3>):(<img className='image-product-update' src={image} />)}
                    </div>
                </div>
            </div>
            <div className='save-edit'>
                <Button onClick={editReserve} >Guardar</Button>
            </div>
        </Dialog>
    </>
  )
}
