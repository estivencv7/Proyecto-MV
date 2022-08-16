import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Service_Update } from '../../../service/ServiceProduct/Service_Update'
import { Logo } from '../../Ui/Logo/Logo'
import { DataTableProvider } from '../DataTableTemplatingDemo/DataTableProvider'
import { Service_RegisterProvider } from '../../../service/ServiceProvider/Service_RegisterProvider'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import './PageRegisterProvider.css'

export const PageRegisterProvider = () => {
  
  const [value, setValue] = useState(false);

  const inputSarch = () => {
    console.log("hola")
    setValue(true)

  }

  return (
    <>
      <main className='content-Page'>
        <div className='content-main'>
            <NavigationAdmin/>
            <DataTableProvider/>
        </div>
      </main>
    </>
  )
}
