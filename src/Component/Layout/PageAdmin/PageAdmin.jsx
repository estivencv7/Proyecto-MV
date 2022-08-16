import React from 'react'
import { Logo } from '../../Ui/Logo/Logo'
import { ContentPageMainAdmin } from '../InterfazAmind/ContentPageMainAdmin'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import './style.css'

export const PageAdmin = () => {
  return (
    <div>
      <NavigationAdmin/>
      <div className='content'>
      <div className='section'> 
         <div className='section-card'  style={{height:'100%'}}>
         <ContentPageMainAdmin/>
         </div>
      </div>
      </div>
    </div>
  )
}
