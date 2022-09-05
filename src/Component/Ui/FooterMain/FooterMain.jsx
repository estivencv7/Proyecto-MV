import React, { useState } from 'react'
import instagram from '../../../Images/instagram.png'
import whatsapp from '../../../Images/whatsapp.png'
import './stylefooter.css'

import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
export const FooterMain = () => {

  const [visible3, setVisible3] = useState(false)

  const open2 = () => {
    if (visible3 == false) {
      setVisible3(true)
    } else {
      setVisible3(false)
    }
  }

  return (
    <footer className='footermain' style={{ width: '95%' }}>
      
      <div style={{marginLeft:'30px'}}>
        <Button className='sunbNavLink buttom1 title-question'  onClick={() => open2(open2)}><h4>Preguntas Frecuentes</h4></Button>
        <Dialog className='cuadro' visible={visible3} style={{ width: '30%' }} style1={{ height: '30%' }} onHide={open2} >
          <h1 className='ayuda'>AYUDA</h1>
          <div>
            <p className='preguntas'>
              <span className='interogacion'>¿QUE MADERA ES? <br /></span>
              Todos o casi todos los productos que vendemos estan hechos de MDF(Madera del futuro).
            </p>
            <p className='preguntas1'>
              <span className='interogacion'>¿CUANTO TIEMPO DE GARANTÍA TIENE LE PRODUCTO? <br /></span>
              Dependiendo de los productos que combre pero casi siempre tiene un año de garantia <br />
              y para poder pedir la garantia tiene que ir con la factura del producto.
            </p>
            <p className='preguntas2'>
              <span className='interogacion'>¿TIENE TRANSPORTE HASTA SU CASA? <br /></span>
              Dependiendo de la ubicacion donde quiera mandar el producto <br />
              ahi o no ahi transporte.
            </p>
            <p className='preguntas3'>
              <span className='interogacion'>¿CUANTO TIEMPO SE LE DEMORA EL PRODUCTO? <br /></span>
              Dependiendo del producto se puede demorar entre 8 o 5 dias en hacerce el producto. <br />
            </p>
          </div>
        </Dialog>
        <div>
          <nav>
            <li> <Button className='sunbNavLink buttom1 title-question'  onClick={() => open2(open2)}>¿QUE MADERA ES?</Button></li>
            <li><Button className='sunbNavLink buttom1 title-question'  onClick={() => open2(open2)}>¿CUANTO TIEMPO DE GARANTÍA TIENE LE PRODUCTO? </Button></li>
            <li><Button className='sunbNavLink buttom1 title-question'  onClick={() => open2(open2)}>¿TIENE TRANSPORTE HASTA SU CASA? </Button></li>
            <li><Button className='sunbNavLink buttom1 title-question'  onClick={() => open2(open2)}>¿CUANTO TIEMPO SE LE DEMORA EL PRODUCTO? </Button></li>
          </nav>
          

        </div>
       
      </div>


      <div className='detalles'>
        <h4>Ubicanos en:</h4>
        <nav className='ubicados'>
          <li >Cra. 17 # 21-46</li>
        </nav>
        <hr />
        <h4>Contactanos al:</h4>
        <nav className='ubicados'>
          <li >3117969946</li>
        </nav>

      </div>

      


      <div className='redes-sociales'>
        <hr />
        <a className='a1' href="https://instagram.com/venta_de_muebles_en_armenia?igshid=YmMyMTA2M2Y="><img src={instagram} className='instagram'></img></a>
        <a className='a1' href="https://api.whatsapp.com/message/I24UF4IWEHT7L1?autoload=1&app_absent=0"><img src={whatsapp} className='whatsapp' alt="" /></a>
      </div>



    </footer>
  )
}
