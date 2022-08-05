import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'
import './style.css'

export const NavInfo = () => {
  const [visible, setVisible] = useState(false)
  const [visible1,setVisible1] = useState(false)
  const [visible2,setVisible2] = useState(false)
  const header=()=>{
    return "Ininquietudes"
  }
  const header2=()=>{
    return "Conocenos "
  }
  const header3=()=>{
    return "Infomacion"
  }

  const open = () => {
    if (visible == false) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  const open1 = () => {
    if (visible1 == false) {
      setVisible1(true)
    } else {
      setVisible1(false)
    }
  }
  const open2 = () => {
    if (visible2 == false) {
      setVisible2(true)
    } else {
      setVisible2(false)
    }
  }

  return (
    <>
      <Button className='boton1' onClick={()=>open(open)}>Contacto</Button>
      <Dialog className='cuadro' visible={visible} style={{ width: '20%' }} style1={{height:'20%'}} onHide={open} header={header3}>
      <h1 className='contacto'>CONTACTANOS</h1>
        <p className='informacion'>
            Estamos ubicados en la Carrera 17 #21-46 <br/>
            Horario desde la 8:00 am hasta las 6:30pm <br/>
            Telefono: 3117969946 <br/>
            No abrimos los dias Domingos ni los dias Festivos <br/>
            Si quiere informacion mas detalla comuniquese <br/>
            al numero ya antes escrito 
        </p>
      </Dialog>

      <Button className='boton1' onClick={()=>open1(open1)}>Quines Somos</Button>
      <Dialog  visible={visible1} style={{ width: '20%' }} style1={{height:'20%'}} onHide={open1} header={header2} >
      <h1 className='quienes'>QUIENES SOMOS</h1>
        <p className='texto'>
        Muebles Valencia es un empreza ubicada en la carrera 17 zona centrica,dedicada a la venta de  producto para el hogar tipo:<br/>
        -Armarios<br/>
        -Comedor<br/>
        -Salas<br/>
        -Peinadores<br/>
        -Camas<br/>
        -Basecamas etc. <br/>
        fabricados en madera.Muebles Valencia lleva 1 año y 9 meses sirviendole a sus cliente
        </p>
      </Dialog>

      <Button className='boton1' onClick={()=>open2(open2)}>Ayuda</Button>
      <Dialog visible={visible2} style={{ width: '20%' }} style1={{height:'20%'}} onHide={open2}  header={header}>
      <h1 className='ayuda'>AYUDA</h1>
        <div>
        <p className='preguntas'>
            <span className='interogacion'>¿QUE MADERA ES? <br/></span>
            Todos o casi todos los productos que vendemos estan hechos de MDF(Madera del futuro).
        </p>
        <p className='preguntas1'>
            <span className='interogacion'>¿CUANTO TIEMPO DE GARANTÍA TIENE LE PRODUCTO? <br/></span>
            Dependiendo de los productos que combre pero casi siempre tiene un año de garantia <br/>
            y para poder pedir la garantia tiene que ir con la factura del producto.
        </p>
        <p className='preguntas2'>
            <span className='interogacion'>¿TIENE TRANSPORTE HASTA SU CASA? <br/></span>
            Dependiendo de la ubicacion donde quiera mandar el producto <br/> 
            ahi o no ahi transporte.
        </p>
        <p className='preguntas3'>
            <span className='interogacion'>¿CUANTO TIEMPO SE LE DEMORA EL PRODUCTO? <br/></span>
            Dependiendo del producto se puede demorar entre 8 o 5 dias en hacerce el producto. <br/> 
        </p>
        </div>
      </Dialog>     
    </>
  )
}
