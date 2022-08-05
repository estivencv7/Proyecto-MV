import React from 'react'
import { Logo } from '../../Ui/Logo/Logo'
import { ContentPageMainAdmin } from '../InterfazAmind/ContentPageMainAdmin'
import './style.css'

export const PageAdmin = () => {
  return (
    <div className='content'>
      <div className='sildebarAdmin'>
        <header className='he'>
          <div className='divLogo'>
            <Logo classN='logo' classTitle='title'/>
          </div>
        </header>
      </div>

      <div className='section'>
        <header style={{height:'9em'}}>
          <p>Muebles Valencia dfdfgd</p>
        </header>
         <div className='section-card'  style={{height:'100%'}}>
         <ContentPageMainAdmin></ContentPageMainAdmin>
         </div>
      </div>
    </div>
  )
}
