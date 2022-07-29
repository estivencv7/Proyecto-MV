import React,{useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Container,FormGroup, Input} from 'reactstrap'
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import './style.css'
export const FormSaveProduct = ({onChange1,onChange2,onChange3,onchange4,onchage5}) => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    // const [image, setImage] = useState("");
    // const [loading, setLoading] = useState(false);
    
    // const uploadimage=async(e)=>{
    //     const files=e.target.files;
    //     const data=new FormData()
    //     data.append("file",files[0])
    //     data.append("upload_preset","images");
    //     setLoading(true)
    //     const res=await fetch("https://api.cloudinary.com/v1_1/estivencloud/image/upload",
    //       {
    //        method:"POST",
    //        body:data
    //       }
    //     )
    //     const file=await res.json();
    //     console.log(res)
    //     setImage(file.secure_url)
    //     console.log(file.secure_url)
    //     setLoading(false)
    //   }


    const onHide = () => {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const header=(
        <div className='div-login'>
           Registrar Product
       </div>
    )
    
    return (
        
        <FormGroup className='cont-Register'>
            <div className='form'>
                <input type='text' className='input-register' onChange={onChange1}/>
                <InputTextarea type='' className='input-register'onChange={onChange2}/>
                <input type='text' className='input-register' />
                
                <div className='category'>
                    <div  className='content-bottom-radio'>
                        <label htmlFor="mueble">Mueble</label>
                        <input type='radio' className='bottom-radio'/>
                    </div>
                    <div className='content-bottom-radio'>
                        <label htmlFor="salas">Sala</label>
                        <input type='radio' className='bottom-radio'/>
                    </div>
                    <div className='content-bottom-radio'>
                        <label htmlFor="Comedores">Comedores</label>
                        <input type='radio' className='bottom-radio'/>
                    </div>
                    

                </div>
                
            </div>
            <div className='content-Input-file'>
                <InputText className='input-register'  id='catch' type='file' name='file' placeholder='subirImg' onChange={onchage5}  />
            </div>
            <div>
                <button onClick={onchange4}>Guardar</button>
            </div>
        </FormGroup>
  )
}
