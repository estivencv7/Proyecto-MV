import React from 'react'
import { Logo } from '../../Ui/Logo/Logo'
import { InputHeader } from '../../Ui/InputHeader/InputHeader'
import { NavHome } from '../NavHome/NavHome'
import { SubHeader } from '../SubHeader/SubHeader'
import { NavBar } from '../SubHeader/NavBar'
// import { NavInfo } from '../../Ui/NavInfo/NavInfo'

export const HeaderHome = () => {
  return (
    <div className='header-user'>
      <header className='header-main'>
        <div style={{width:'184px',}}>
          {/* <div className='navinfo'>
            <NavInfo />
          </div> */}
          <Logo classN="title-main" />
         
        </div>
        <InputHeader />
        <NavHome />
      </header>
      <NavBar />
    </div>
  )
}
