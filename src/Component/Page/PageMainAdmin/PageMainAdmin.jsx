import React,{useEffect} from 'react'
import toast from 'react-hot-toast'
import { PageAdmin } from '../../Layout/PageAdmin/PageAdmin'
import './style.css'

export const PageMainAdmin = () => {
  useEffect(() => {
    const admin = sessionStorage.getItem("administrador")
    const admin2 = JSON.parse(admin.toString());
    document.getElementById("nameAccount").textContent = admin2.nameU
    toast("Has iniciado sesion, Bienvenido " + admin2.nameU,{className:'send-toast',position:'bottom-right',duration:'207'})
  }, [])
  return (

    <PageAdmin />

  )
}
