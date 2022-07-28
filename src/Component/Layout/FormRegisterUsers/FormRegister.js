import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { Panel } from 'primereact/panel';
import './FormDemo.css';

export const FormRegister = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
  
    const formik = useFormik({
        initialValues: {
            name: '',
            surname : '',
            identification : '',
            email: '',
            password: '',
            cellphoneNumber : '',
            date: null,
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Se requiere el nombre.';
            }
            if(!data.surname){
                errors.surname = 'Se requiere el apellido.';
            }
            if(!data.cellphoneNumber){
                errors.cellphoneNumber = 'Se requiere el numero celular.';
            }
            if(!data.identification){
                errors.identification = 'Se requiere el numero de identificacion'
            }
            if (!data.email) {
                errors.email = 'Se requiere el correo electronico.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Direccion de correo invalida. Ejemplo de ingreso. example@email.com';
            }
            if(!data.date){
                errors.date = 'Se requiere la fecha de nacimiento'
            }
            if (!data.password) {
                errors.password = 'Se requiere la contraseña.';
            }

            if (!data.accept) {
                errors.accept = 'Necesitas aceptar los terminos y condiciones.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pon tu contraseña</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Sugerencias en la contraseña</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>Al menos una letra en minuscula</li>
                <li>Al menos una letra en mayuscula</li>
                <li>Al menos un numero</li>
                <li>Minimo 8 caracteres</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registro Exitoso!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Tu cuenta esta registrada bajo el nombre de <b>{formData.name}</b> ; Va a ser valida durante 30 dias sin activacion. Por favor revisa <b>{formData.email}</b> para activar tu cuenta.
                    </p>
                </div>
            </Dialog>

            
                <div className="card">
                   
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nombres y apellidos</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                       
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="identification" name="identification" value={formik.values.identification} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="identification" className={classNames({ 'p-error': isFormFieldValid('identification') })}>Cedula*</label>
                            </span>
                            {getFormErrorMessage('identification')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="cellphoneNumber" name="cellphoneNumber" value={formik.values.cellphoneNumber} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="cellphoneNumber" className={classNames({ 'p-error': isFormFieldValid('cellphoneNumber') })}>Numero celular*</label>
                            </span>
                            {getFormErrorMessage('cellphoneNumber')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <br/>
                        <div className="field">
                            <span className="p-float-label">
                                <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('date') })} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                <label htmlFor="date" className={classNames({ 'p-error': isFormFieldValid('date') })}>Fecha De Nacimiento</label>
                            </span>
                            {getFormErrorMessage('date')}
                        </div>
                        <br/>
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>Acepto terminos y condiciones*</label>
                        </div>

                        <Button type="submit" label="Registrar" className="mt-2" />
                    </form>
                </div>
                <Panel className='descrition' header="Hola 🙂" toggleable>  
                    <p>Que esperas Registrate y disfruta de nuestros increibles precios y productos
                        que muebles valencia tiene parati 😉 
                    </p>         
                </Panel>
        </div>
    );
}
                 