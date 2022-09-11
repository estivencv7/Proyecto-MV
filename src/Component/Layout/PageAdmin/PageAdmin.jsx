import React from 'react'
import { FooterMain } from '../../Ui/FooterMain/FooterMain'
import { Logo } from '../../Ui/Logo/Logo'
import { ContentPageMainAdmin } from '../InterfazAmind/ContentPageMainAdmin'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import './style.css'

export const PageAdmin = () => {
  return (
    <>
      <NavigationAdmin />
      
      
      <div className='div-ContentPageMainAdmin'>
        <ContentPageMainAdmin />
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <FooterMain></FooterMain>
      </div>
      
    </>
  )
}
