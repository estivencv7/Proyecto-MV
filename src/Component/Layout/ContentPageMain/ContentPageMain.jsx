import React, { useState } from 'react'
import CarouselDemo from './Carousel'
import cama from '../../../Images/cama1.jpg'
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
import {getZomm} from './Zoom'
import { Zoom2 } from './Zoom2'
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
   return (
      <div>
         <div className='content-page-main'>
            <CarouselDemo />
            {/*==============card=====================*/}
            <div className='car'>

               <div className='cardOjeb'>
                  <img className='cardImg' src={cama} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew' onClick={() => onHide(onHide)}>Observar</Button>
                     <Dialog visible={visible} style={{ width: '70%' }} onHide={onHide}>
                        <main className='content-seew'>
                          
                              <div className='cursor' style={{ width: '40%', height: '50vh' }} >
                                 {/* <ReactImageMagnify  style={{width:'342x',heigth:'483px'}}{...{
                                    smallImage: {
                                       alt: 'Wristwatch by Ted Baker London',
                                       isFluidWidth: true,
                                       src: watchImg1200,
                                    },
                                    largeImage: {
                                       src: watchImg1200,
                                       width: 2000,
                                       height: 1900
                                    }
                                 }} /> */}
                                   <img className='seew-image' src={cama}/>
                                {/* <Zoom2/>  */}
                                 {/* <getZoom/> */}
                              
                           </div>

                           <div className="description">
                              <div>
                                 <h2>nombre</h2>
                                 <p>precio</p>
                              </div>
                              <hr />
                              <div>
                                 description
                              </div>
                              <hr />
                              <div>
                                 <input type="number" />
                              </div>
                           </div>
                        </main>

                     </Dialog>
                     {/*==============card=====================*/}
                  </Panel>

               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={cama2} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={cama3} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={sillaa} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={sillam} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={sillar} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>
               <div className='cardOjeb'>
                  <img className='cardImg' src={cama2} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={cama2} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={cama2} alt="" />
                  <Panel header={<Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                     <div>
                        <div className='content-panel'>
                           <p>$100.050</p>
                           <p><i className="pi pi-shopping-cart ico"></i></p>
                        </div>
                     </div>
                     <Button className='seew'>Observar</Button>
                  </Panel>

               </div>

            </div>
         </div>
      </div>
   )
}
