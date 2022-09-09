import React,{useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast'
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
         <Toaster reverseOrder={true} toastOptions={{
                className: 'k',
                duration: '150'
          }} />
      </div>
  )
}
