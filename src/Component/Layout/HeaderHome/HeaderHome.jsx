import React from 'react'
import { Logo } from '../../Ui/Logo/Logo'
import { InputHeader } from '../../Ui/InputHeader/InputHeader'
import { NavHome } from '../NavHome/NavHome'
import { SubHeader } from '../SubHeader/SubHeader'
import { NavBar } from '../SubHeader/NavBar'
export const HeaderHome = () => {
  return (
    <div className='header-user'>
      <header className='header-main'>
          <Logo classN="title-main"/>
          <InputHeader/>
          <NavHome/>
      </header>
      <NavBar/> 
    </div>
  )
}
