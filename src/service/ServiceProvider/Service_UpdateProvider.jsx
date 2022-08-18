import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioGroup } from 'rsuite';
import { InputNumber } from 'primereact/inputnumber';
import './css/registerProvider.css'

export const Service_UpdateProvider = ({codeProviderUpdate}) => {
  
  const [visible, setVisible] = useState(false);
  const [name_supplier_product, setNameSupplierProduct] = useState("")
  const [code , setCodeProvider] = useState("")
  const [provider, setProvider] = useState("")

  function searchProvider () {
    console.log("entro a buscar un proveedor")
    console.log(codeProviderUpdate)
      const urlRegister = 'http://localhost:8080/proveedores/buscarProveedor/' + codeProviderUpdate;
      fetch(urlRegister, {
          method: 'GET',
          headers: {
              "Content-type": "application/json"
          }
      })
          .then(response => response.json())
          .then(provider => guardarProvider(provider))
          console.log(provider)
  }    

  const guardarProvider = (provi) =>{
      setProvider(provi)
      setCodeProvider(provi.cedula_proveedor)
  }
  
  const seew=()=>{
     
      if (visible == false) {
        console.log("entro al if")
        console.log(codeProviderUpdate+"fsd")
          searchProvider()
          setVisible(true)
      } else {
        console.log("entro al else")
          setVisible(false)
      } 
  }

  function editProvider() {
      console.log("estoy editando un proveedor")
      const name_provider = document.getElementById("inputName").value
      const phone = document.getElementById("inputPhone").value
      const urlRegister = 'http://localhost:8080/actualizarProveedor/' + codeProviderUpdate;
      fetch(urlRegister, {
          method: 'PUT',
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
                cedula_proveedor: code,
                nombre_proveedor: name_provider,
                telefono_proveedor: phone
          })
      })
          .then(response => response.json())
          .then(json => {
              if(json.ok){
                  alert("Registro exitoso")
              }else{
                  alert("Registro exitoso")
              }
          })
  }



  const header=(
      <div className='div-update'>
         Editar Proveedores
     </div>
  )

return (
  <>
      <Button onClick={()=>seew(seew)}><i className='pi pi-user-edit icons-registerProduct'></i></Button>
      <Dialog header={header} visible={visible} modal onHide={seew} style={{ width: '30em',bordeRadius:'100%'}} className='dialogoRegisterProduct' >     
          
              <div className='cont-update'>     
              
                  <div className='form'>
                        <InputText className='input-update' placeholder={provider.cedula_proveedor}/>
                        <InputText className='input-update' placeholder={provider.nombre_proveedor}/>
                        <InputNumber className='input-update inputpress' placeholder={provider.telefono_proveedor}/>

                      </div>
                  </div>
          <div className='save-edit'>
              <Button onClick={editProvider} >Guardar</Button>
          </div>
      </Dialog>
  </>
)
}


