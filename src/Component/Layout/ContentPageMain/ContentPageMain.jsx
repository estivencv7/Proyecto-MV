import React,{useState} from 'react'
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
export const ContentPageMain = () => {
   const [val1, setVal1] = useState(null);
   const [val2, setVal2] = useState(null);
    return (
      <div>
         <div className='content-page-main'>    
            <CarouselDemo/>
            <div className='car'>
               
               <div className='cardOjeb'>
                  <img className='cardImg' src={cama} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
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
