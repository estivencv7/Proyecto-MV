import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputText } from 'primereact/inputtext';
import './css/serviceUser.css'
import { HeaderHome } from '../../Component/Layout/HeaderHome/HeaderHome';
import { FooterMain } from '../../Component/Ui/FooterMain/FooterMain';

export const Service_UpdateUser = ({}) => {


    const [productSearch , setProducts] = useState(null);
    const [visible, setVisible] = useState(true);
    const [documnet, setDocumentUser] = useState("");
    const [code , setCodeUser] = useState(0)
    const [cart , setCartUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("")

    useEffect(() => {
        console.log("emtro al usefect")
        searchUser()
      }, [])



    function searchUser () {
        let tokenUser = localStorage.getItem("user")
        const user = sessionStorage.getItem("usuario")
        const user2 = JSON.parse(user.toString());
        console.log("CEDULA " +user2.idU);
        const urlRegister = 'http://localhost:8080/clientes/buscarCliente/' + user2.idU;
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization" : "Bearer " + tokenUser
            }
        })
            .then(response => response.json())
            .then(user => guardarProduc(user))
            setLoading(false)
    }

    const guardarProduc = (user) =>{
        setUser(user)
        console.log("contra "+user);
        setCodeUser(user.codigo_cliente)
        setDocumentUser(user.cedula_cliente)
        setCartUser(user.carrito)
    }


    function editUser() {
        console.log("estoy editando un Usuario")
        const name_user = document.getElementById("inputName").value
        const lastName_user = document.getElementById("inputLastName").value
        const phone = document.getElementById("inputPhone").value
        const email = document.getElementById("inputEmail").value
        const date = document.getElementById("inputDate").value
        const password = document.getElementById("inputpassword").value
        const urlRegister = 'http://localhost:8080/clientes/' + documnet;
        let tokenUser = localStorage.getItem("user")
        if(tokenUser == "" || tokenUser == null){
            alert("Por favor registrese")
        }else{
            fetch(urlRegister, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                    "Authorization" : "Bearer " + tokenUser
                },
                body: JSON.stringify({
                    nombre: name_user,
                    cedula_cliente: documnet,
                    apellido_cliente: lastName_user,
                    correo : email,
                    celular_cliente:phone,
                    contraseña_cliente: password,
                    codigo_producto : code,
                    fecha_nacimin_cliente : date,
                    carrito: cart
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

    const seew=()=>{
       
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        } 
    }

  
    return (
        <>
            <HeaderHome/>
            <div className='content-updateUser'>
                <div className='cont-update'>     
                    <h2 className='div-update'>Editar Perfil</h2>
                    <label htmlFor="" className='label-update'>Nombre</label>
                    <InputText type='text' id='inputName' className='input-update' placeholder={user.nombre}/>
                    <label htmlFor="" className='label-update'>Apellido</label>
                    <InputText type='' id='inputLastName' className='input-update' placeholder={user.apellido_cliente}/>
                    <label htmlFor="" className='label-update'>Numero</label>
                    <InputText type='number' id='inputPhone' className='input-update inputpress' placeholder={user.celular_cliente}/>
                    <label htmlFor="" className='label-update'>Correo</label>
                    <InputText type='email' id='inputEmail' className='input-update inputpress' placeholder={user.correo}/>
                    <label htmlFor="" className='label-update'>Fecha de Nacimiento</label>
                    <InputText type='date' id='inputDate' className='input-update'/>
                    <label htmlFor="" className='label-update'>Contraseña</label>
                    <InputText type='password' id='inputpassword' className='input-update'/>
                    {/* placeholder={user.contraseña_cliente}*/}
                        
                </div>
                
            </div>
            <div className='save-edit'>
                <Button onClick={editUser}  >Guardar</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FooterMain></FooterMain>
            </div>
        </>
  )
}
