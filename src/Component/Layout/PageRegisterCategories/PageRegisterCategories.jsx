import React from 'react'
import { DataTableCategories } from '../DataTableTemplatingDemo/DataTableCategories'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
export const PageRegisterCategories = () => {
  return (
    <>
      <main className='content-Page'>
        <div className='content-main'>
            <NavigationAdmin/>
          <DataTableCategories/>
        </div>
      </main>
    </>
  )
}
