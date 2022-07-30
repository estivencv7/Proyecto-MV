
import React from 'react'
import {Service_ProductRegis} from '../../../service/ServiceProduct/Service_ProductRegis'
import {Logo} from '../../Ui/Logo/Logo'
import{ DataTableTemplatingDemo} from '../DataTableTemplatingDemo/DataTableTemplatingDemo'
import './style.css'
export const PaginaRegisterProduct = () => {
  return (
    <>
       <main className='content-Page'>
            <div className='sildebar'>
               <Service_ProductRegis style='button-new'/>
               <Service_ProductRegis style='button-new'/>
            </div>
            <div className='content-main'>
                <header style={{height:'12em',display:'flex',alignItems:'center'}}>
                    <Logo classN='title-main'></Logo>
                </header>
                <DataTableTemplatingDemo/>

            </div>
       </main>
    </>
    
  )
}
