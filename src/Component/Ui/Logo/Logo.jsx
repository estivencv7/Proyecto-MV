import React from 'react'
import logo from '../../../Images/logo3.png'
import './style.css'
export const Logo = ({classN='title-main',classTitle='name'}) => {
  /*<p className={classTitle} >Muebles Valencia</p>*/
  return (
    <>
      <img  src={logo}alt="" className={classN}/>
      
    </>
    // <h1  className={classN}>{text}</h1>
  )
}
