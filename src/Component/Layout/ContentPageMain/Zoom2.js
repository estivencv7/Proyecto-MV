import React from 'react'
import cama1 from '../../../Images/cama1.jpg'
// import {$} from 'jquery'

export const Zoom2 = () => {
    
  return (
    <aside className='zoom-contenedor zoom1'>
        <div className='area-zoom'>
            <img className='seew-image' src={cama1}  data-high-src={cama1} data-loader-src='loader.gif'/>
        </div>
    </aside>
  )
}
