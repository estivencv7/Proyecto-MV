import React,{useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Logo } from '../../Ui/Logo/Logo'
import { ContentPageMainAdmin } from '../InterfazAmind/ContentPageMainAdmin'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import './style.css'

export const PageAdmin = () => {
  useEffect(() => {
    const admin = sessionStorage.getItem("administrador")
    const admin2 = JSON.parse(admin.toString());
    document.getElementById("nameAccount").textContent = admin2.nameU
  }, [])
  
  return (
    <>
    <div>
      <NavigationAdmin/>
         <div className='contentPageAdmin'>
          <ContentPageMainAdmin/>
         </div>
         <Toaster reverseOrder={true} toastOptions={{
                className: 'k',
                duration: '150'
          }} />
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <FooterMain></FooterMain>
      </div>
      
    </>
  )
}
