import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputText } from 'primereact/inputtext';
import './css/serviceUser.css'
import { HeaderHome } from '../../Component/Layout/HeaderHome/HeaderHome';

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
{/* 
        <div className="form-demo">        
                <div className="card">
                   
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={nameClient} onChange={e => catchNameClient(e)} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nombres*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="surname" name="surname" value={surnameClient} onChange={e => catchSurnameClient(e)} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('surname') })} />
                                <label htmlFor="surname" className={classNames({ 'p-error': isFormFieldValid('name') })}>Apellidos*</label>
                            </span>
                            {getFormErrorMessage('surname')}
                        </div>
                       
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="identification" name="identification" value={idClient} onChange={e => catchIdClient(e)} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="identification" className={classNames({ 'p-error': isFormFieldValid('identification') })}>Cedula*</label>
                            </span>
                            {getFormErrorMessage('identification')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="cellphoneNumber" name="cellphoneNumber" value={cellphoneNumberClient} onChange={e => catchCellPhoneNumber(e)} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="cellphoneNumber" className={classNames({ 'p-error': isFormFieldValid('cellphoneNumber') })}>Numero celular*</label>
                            </span>
                            {getFormErrorMessage('cellphoneNumber')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={emailClient} onChange={e => catchEmailClient(e)} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <Password id="password" name="password" value={passwordClient} onChange={e => catchPasswordClient(e)} toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <Calendar id="date" name="date" value={dateBirthClient} onChange={e => catchDateBirthClient(e)} className={classNames({ 'p-invalid': isFormFieldValid('date') })} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                <label htmlFor="date" className={classNames({ 'p-error': isFormFieldValid('date') })}>Fecha De Nacimiento</label>
                            </span>
                            {getFormErrorMessage('date')}
                        </div>
                        <br/>
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>Acepto terminos y condiciones*</label>
                            {getFormErrorMessage('accept')}
                        </div>

                        <Button type="submit" label="Registrar" onClick={registerClient} className="mt-2 buttom-register" />
                    </form>
                </div>
                <Panel className='descrition' header="Hola 🙂" toggleable>  
                    <p>Que esperas Registrate y disfruta de nuestros increibles precios y productos
                        que muebles valencia tiene para ti 😉 
                    </p>         
                </Panel>
                <Toaster reverseOrder={true} toastOptions={{
                className: 'k',
                duration: '100'
            }} />
        </div> */}
        </>
  )
}
