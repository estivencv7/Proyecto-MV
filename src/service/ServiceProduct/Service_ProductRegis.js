import React,{useState} from 'react'
import { FormSaveProduct } from '../../Component/Layout/FormSaveProduct/FormSaveProduct';
import { Dialog } from 'primereact/dialog';
import { Button,} from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './css/registerProduct.css'
export const Service_ProductRegis = ({style}) => {

    const [visible, setVisible] = useState(false)
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [name_product, setProduct] = useState("")
    const [descrition, setDescrition] = useState("")
    const [press, setPress] = useState(0)
    


    const uploadimage=async(e)=>{
        console.log("entro")
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
        setLoading(false)
        return (
            <img src={file.secure_url} alt="imagen"></img>
        )
    }

    const catchName = (even) => {
        setProduct(even.target.value)
    }

    const catchDescrition = (even) => {
        setDescrition(even.target.value)
    }

    function registerProduct() {
        
        console.log("estoy registrando un producto")
        const urlRegister = 'http://localhost:8080/productos';
        fetch(urlRegister, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nombre: name_product,
                descripcion: descrition,
                presio: press,
                foto:image
            })
        })
            .then(response => response)
            .then(json => check(json.ok))
    }

    function check(element) {
        if (element == true) {
            alert("Registro exitoso")
        } else {
            alert("hubo un error al momento de registrar")
        }
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
        <div className={style}>
            <Button className='' onClick={() => onHide(onHide)} >Nuevo</Button>
            <Dialog header={header}   className='dialogoRegisterProduct' visible={visible} style={{ width: '30em',bordeRadius:'100%'}} modal onHide={onHide}>
            
            <div className='content-image'>
                
                <FormSaveProduct onChange1={catchName} onChange2={catchDescrition} onchange4={registerProduct} onchange3={() => onHide(onHide)}/>
                
                <div className='content-Input-file'>
                {loading ? (<h3>cargando imagen</h3>):(<img className='image-product' src={image} />)}
                    <InputText className='input-register'  id='catch' type='file' name='file' placeholder='subirImg' onChange={uploadimage}  />
                    
                </div>
            </div>
            </Dialog>
            
        </div>
    )
}
