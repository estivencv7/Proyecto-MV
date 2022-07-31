import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState}from 'react'
import { FormSaveProduct } from '../../Component/Layout/FormSaveProduct/FormSaveProduct'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
export const Service_Update = () => {
    const [visible, setVisible] = useState(false);

    const seew=()=>{
       
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        } 
    }

  return (
    <>
        <Button onClick={()=>seew(seew)}><i className='pi pi-user-edit icons-registerProduct'></i></Button>
        <Dialog visible={visible} modal onHide={seew} style={{ width: '30em',bordeRadius:'100%'}}>
           
            <div>
                <input type="number" placeholder='search' />
            </div>
            <hr />
            <div>
                <div>
                    <input type='text' placeholder='Nombre'/>
                    <InputTextarea placeholder='Dedcrition'/>
                    <input type="number" />
                    <input type="number" />
                </div>
                <hr />
                <div>
                    <select name="" id="">
                        <option value="">pepsi</option>
                        <option value="">cocacola</option>
                        <option value="">muebleria14</option>
                    </select>

                    <select name="" id="">
                        <option value="">Muebles</option>
                        <option value="">Sala</option>
                        <option value="">armarios</option>
                    </select>

                </div>
            </div>
            <div>

            </div>

        </Dialog>

    </>
  )
}
