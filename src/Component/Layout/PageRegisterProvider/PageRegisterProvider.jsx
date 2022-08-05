import React from 'react'
import { Service_ProductRegis } from '../../../service/ServiceProduct/Service_ProductRegis'
import { Button } from 'primereact/button'
import { Service_Update } from '../../../service/ServiceProduct/Service_Update'
import { Logo } from '../../Ui/Logo/Logo'
import { DataTableProducts } from '../DataTableTemplatingDemo/DataTableProducts'
export const PageRegisterProvider = () => {
  return (
    <div>
      <div className='sildebar'>
          <Service_ProductRegis style='' />
          <Button className=''><i className='pi pi-trash icons-registerProduct'></i></Button>
          <Service_Update />
          
        </div>
        <div className='content-main'>
          <header style={{ height: '12em', display: 'flex', alignItems: 'center' }}>
            <Logo classN='title-main'></Logo>
          </header>
          <DataTableProducts/>
         
        </div>
    </div>
  )
}
