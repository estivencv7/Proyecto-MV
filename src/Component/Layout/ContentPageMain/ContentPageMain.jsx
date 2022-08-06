import React, { useState } from 'react'
import CarouselDemo from './Carousel'
import sinfondo from '../../../Images/sinfondo.png'
import cama2 from '../../../Images/cama2.PNG'
import cama3 from '../../../Images/cama3.jpg'
import sillar from '../../../Images/sillasrojas.jpeg'
import sillam from '../../../Images/sillasymesa.jpeg'
import sillaa from '../../../Images/sofaazul.jpeg'
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Rating } from 'primereact/rating';
import './CarouselDemo.css'
import { Dialog } from 'primereact/dialog'
import { getZomm } from './Zoom'
import { Zoom2 } from './Zoom2'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Link } from 'react-router-dom'
// import ReactImageMagnify from 'react-image-magnify';
// import { on } from 'rsuite/esm/DOMHelper'

export const ContentPageMain = () => {
   const [val1, setVal1] = useState(null);
   const [visible, setVisible] = useState(false);

   const onHide = () => {
      if (visible == false) {
         setVisible(true)
      } else {
         setVisible(false)
      }
   }

   function ver(e) {





      var x, y, x1, x2, y1, y2;
      const fact = 900 / 700;
      const opp = 100;

      if (e == null) e = window.event;
      x = e.clientX;
      y = e.clientY;

      x1 = -opp + (x) * fact;
      y1 = -opp + (y) * fact;
      x2 = +opp + (x) * fact;
      y2 = +opp + (y) * fact;

      document.images.big.style.display = "inline";
      document.images.big.style.left = (x) * (1 - fact);
      document.images.big.style.top = (y) * (1 - fact);
      document.images.big.style.clip = "rect(" + y1 + "px," + x2 + "px," + y2 + "px," + x1 + "px)";








      // let x, y, x1, x2, y1, y2;
      // const fact = 800/500;
      // const opp = 100;

      // console.log(opp + opp)

      // if (e == null) e = window.event;

      // x = e.clientX;
      // y = e.clientY;

      // x1 = +opp + (x) * fact;
      // y1 = +opp + (y) * fact;
      // x2 = -opp + (x) * fact;
      // y2 = -opp + (y) * fact;


      // document.images.big.style.display = "inline";
      // document.images.big.style.letf = (x) * (1 - fact);
      // document.images.big.style.top = (y) * (1 - fact);
      // document.images.big.style.clip = "rect(" + y1 + "px," + x2 + "px," + y2 + "px," + x1 + "px)";
      // //   document.getElementById('big').style.display = 'line'
      // //   document.getElementById('big').style.left = (x) * (1 - fact);
      // //   document.getElementById('big').style.top = (x) * (1 - fact);
      // //   document.getElementById('big').style.clipPath = "react(" + y1 + "px," + x2 + "px," + y2 + "px," + x1 + "px)";
      // //      document.images.namedItem('big').style.display="inline";
      // //      document.images.namedItem('big').style.left=(x) * (1 - fact);
      // //      document.images.namedItem('big').style.top=(y) * (1 - fact);
      // //      document.images.namedItem('big').style.clipPath="rect("+y1+"px"+x2+"px,"+y2+"px,"+x1+"px)";  
      // // 
   }
   return (

      <div className='content-page-main'>
         <CarouselDemo />
         {/*==============card=====================*/}


         <div className='car'>


            <div className='cardOjeb'>
               <Link to='jjj'>
                  <img className='img-card' src={sinfondo} alt="" />
                  <h2>Juego de muebles</h2>
               </Link>
               <div className='cont-press'>
                  <p style={{fontSize:'25px',color:'red'}}>$150.000</p>
                  <p><i className="pi pi-shopping-cart ico"></i></p>
               </div>
               <Button className='seew' onClick={() => onHide(onHide)}>Observar</Button>
               <Dialog visible={visible} className='content-modal' onHide={onHide}  >
                  <div>
                     <TransformWrapper>
                        <TransformComponent>
                           <img src={sinfondo} width='600' />
                        </TransformComponent>
                     </TransformWrapper>
                  </div>
               </Dialog>



            </div>

         </div>


      </div>

   )
}

{/* <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew' onClick={() => onHide(onHide)}>Observar</Button>
                     <Dialog visible={visible} className='content-modal' onHide={onHide}  >


                        <div>
                           <TransformWrapper>
                              <TransformComponent>
                                 <img src={cama} width='600' />
                              </TransformComponent>
                           </TransformWrapper>
                        </div>

                        {/* <div onMouseMove={ver} className='lupa' >
                           <img className='img1' src={cama} style={{ width: '700', height: '50vh' }}></img>
                           <img className='img2' src={cama} name='big' style={{ width: '900' }} ></img>
                        </div> */}



                  //    </Dialog>
                  //    {/*==============card=====================*/}
                  // </Panel> */}
