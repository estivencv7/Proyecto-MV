import React,{useState} from 'react'
import CarouselDemo from './Carousel'
import cama from '../../../Images/cama2.PNG'
import cama1 from '../../../Images/cama1.jpg'
import mueble from '../../../Images/mueble1.jpeg'
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
                     <div className='content-panel'>
                       <p>$100.050</p> 
                      <p><i className="pi pi-shopping-cart ico"></i></p>
                     </div>   
                  </Panel>
               </div>
               <div className='cardOjeb'>
                  <img className='cardImg' src={cama1} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
      
                  </Panel>
               </div>
               <div className='cardOjeb'>
                  <img className='cardImg' src={mueble} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
      
                  </Panel>
               </div>
               <div className='cardOjeb'>
                  <img className='cardImg' src={cama1} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
      
                  </Panel>
               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={cama1} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
      
                  </Panel>
               </div>

               <div className='cardOjeb'>
                  <img className='cardImg' src={cama} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
      
                  </Panel>
               </div>
               <div className='cardOjeb'>
                  <img className='cardImg' src={cama1} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
      
                  </Panel>
               </div>
               <div className='cardOjeb'>
                  <img className='cardImg' src={mueble} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
      
                  </Panel>
               </div>
               <div className='cardOjeb'>
                  <img className='cardImg' src={cama1} alt="" />
                  <Panel header={ <Rating value={val1} onChange={(e) => setVal1(e.value)} />} toggleable>
                  
                  </Panel>
               </div>
         </div>
         </div>
       </div>
    )
}
