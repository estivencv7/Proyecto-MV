import React,{useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Button,} from 'primereact/button';
import { Container,FormGroup,Input} from 'reactstrap'
import './style.css'
export const FormSaveProduct = () => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    
    const uploadimage=async(e)=>{
        const files=e.target.files;
        const data=new FormData()
        data.append("file",files[0])
        data.append("upload_preset","images");
        setLoading(true)
        const res=await fetch("https://api.cloudinary.com/v1_1/estivencloud/image/upload",
          {
           method:"POST",
           body:data
          }
        )
        const file=await res.json();
        console.log(res)
        setImage(file.secure_url)
        console.log(file.secure_url)
        setLoading(false)
      }


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
         <>
        <Button className='' onClick={() => onHide(onHide)} ></Button>
        <Dialog header={header}   className='dialogoRegisterProduct' visible={visible} style={{ width: '30em', height: '22em'}} modal onHide={onHide}>

            <Container >
                <FormGroup className='cont-Register'>
                    <div className='form'>
                        <Input type='text' className='input-register'/>
                        <Input type='text' className='input-register'/>
                        <Input type='text' className='input-register'/>
                        <Input type='text' className='input-register'/>
                        <Input type='text' className='input-register'/>
                        <Input type='text' className='input-register'/>
                        <Input type='text' className='input-register'/>
                        <Input type='text' className='input-register'/>
                        <Input type='text'className='input-register'/>
                        <Input type='text' className='input-register'/>
                    </div>
                    <div>
                        <Input style={{width:'100%'}} id='catch' type='file' name='file' placeholder='subirImg' onChange={uploadimage} onKeyDownCapture={image}/>
                        {loading ? (<h3>cargando imagen</h3>):(<img src={image} style={{width:"300px", height:'24em'}}/>)}
                    </div>
                </FormGroup>
            </Container>

        </Dialog>
    </>
  )
}
