import React from 'react'
import { Logo } from '../../Ui/Logo/Logo'
import { ContentPageMainAdmin } from '../InterfazAmind/ContentPageMainAdmin'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import './style.css'

export const PageAdmin = () => {
  return (
    <div>
      <NavigationAdmin/>
         <div>
          <ContentPageMainAdmin/>
         </div>
      </div>
  )
}
