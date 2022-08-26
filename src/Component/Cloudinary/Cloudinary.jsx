// import React,{useState}from 'react'
// import { Container,FormGroup,Input} from 'reactstrap'
// // import {Cloudinary} from '../Cloudinary/Cloudinary'



// export const Cloudinary = ({onchange1}) => {

//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);


//   const uploadimage=async(e)=>{
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
//   return (
//     <div>
//         <Container>
//           <h1>Subiendo Imagenes</h1>
//           {/* <Cloudinary/> */}
//           <FormGroup>
//             <Input type='file' name='file' placeholder='subirImg' onChange={uploadimage} onKeyDownCapture={image}/>
//             {loading ? (<h3>cargando imagen</h3>):(<img src={image} style={{width:"300px"}}/>)}
//           </FormGroup>
//         </Container>
//     </div>
//   )
// }
