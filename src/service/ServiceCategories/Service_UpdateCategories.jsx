import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputText } from 'primereact/inputtext';

export const Service_UpdateCategories = ({codeCategoriUpdate}) => {
    const [visible, setVisible] = useState(false);
    const [name_supplier_product, setNameSupplierProduct] = useState("")
    const [code , setCodeCategori] = useState("")
    const [categori, setCategori] = useState("")
  
    function searchCategori () {
      console.log("entro a buscar una categoria")
      console.log(codeCategoriUpdate)
        const urlRegister = 'http://localhost:8080/categorias/buscarCategoria/' + codeCategoriUpdate;
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(category => guardarProvider(category))
            
    }    
  
    const guardarProvider = (category) =>{
        console.log("rtrr"+ category)
        setCategori(category)
        setCodeCategori(category.id_categoria)
    }
    
    const seew=()=>{
       
        if (visible == false) {
          console.log("entro al if")
          console.log(codeCategoriUpdate+"fsd")
            searchCategori()
            setVisible(true)
        } else {
          console.log("entro al else")
            setVisible(false)
        } 
    }
  
    function editCategori() {
        console.log("estoy editando un proveedor")
        const name_categori = document.getElementById("inputName").value
        console.log(name_categori)
        const urlRegister = 'http://localhost:8080/categorias/actualizarCategoria/' + codeCategoriUpdate;
        fetch(urlRegister, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                    id_categoria: code,
                    nombre: name_categori
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
        let tokenAdmin = localStorage.getItem('admin')
        if(tokenAdmin == "" || tokenAdmin == null){
          alert("Por favor registrese")
        }else{
          fetch(urlRegister, {
              method: 'PUT',
              headers: {
                  "Content-type": "application/json",
                  "Authorization" : "Bearer " + tokenAdmin
              },
              body: JSON.stringify({
                id_categoria: code,
                nombre: name_categori
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
    }
  
  
  
    const header=(
        <div className='div-update'>
           Editar Categorias
       </div>
    )
  
  return (
    <>
        <Button onClick={()=>seew(seew)}><i className='pi pi-user-edit icons-registerProduct'></i></Button>
        <Dialog header={header} visible={visible} modal onHide={seew} style={{ width: '30em',bordeRadius:'100%'}} className='dialogoRegisterProduct tabla' >     
            
         
              
              <div className='content-provider'>
                  <InputText id='inputName' className='input-update' placeholder={categori.nombre}/>
  
              </div>
          <div className='save-edit'>
                <Button onClick={editCategori} >Guardar</Button>
            </div>
        </Dialog>
    </>
  )
}
