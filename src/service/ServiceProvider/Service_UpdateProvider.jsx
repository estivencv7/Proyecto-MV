import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioGroup } from 'rsuite';
import { InputNumber } from 'primereact/inputnumber';
import './css/registerProvider.css'

export const Service_UpdateProvider = (codeProviderUpdate) => {
  
  const [productSearch , setProducts] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name_supplier_product, setNameSupplierProduct] = useState("")
  const [code , setCodeProvider] = useState(0)
  const [provider, setProvider] = useState("")

  function searchProduct () {
      const urlRegister = 'http://localhost:8080/buscarProveedor/' + codeProviderUpdate;
      fetch(urlRegister, {
          method: 'GET',
          headers: {
              "Content-type": "application/json"
          }
      })
          .then(response => response.json())
          .then(provider => guardarProvider(provider))
      setLoading(false)
  }    

  const guardarProvider = (provider) =>{
      setProvider(provider)
      setCodeProvider(provider.cedula_proveedor)
  }
  
  const seew=()=>{
     
      if (visible == false) {
          searchProduct()
          setVisible(true)
      } else {
          setVisible(false)
      } 
  }

  function editProduct() {
      console.log("estoy registrando un proveedor")
      const name_provider = document.getElementById("inputName").value
      const identification = document.getElementById("inputDescription").value
      const phone = document.getElementById("inputPrice").value
      console.log(name_supplier_product);
      const urlRegister = 'http://localhost:8080/actualizarProveedor/' + codeProviderUpdate;
      fetch(urlRegister, {
          method: 'PUT',
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
                cedula_proveedor: identification,
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
              <Button onClick={editProduct} >Guardar</Button>
          </div>
      </Dialog>
  </>
)
}


