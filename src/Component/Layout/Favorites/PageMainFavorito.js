import React,{useEffect} from 'react'
import { ServicioList_Favorites } from '../../../service/ServicioFavoritos/ServicioList_Favorites'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import './style.css'
export const PageMainFavorito = () => {
  
  useEffect(() => {
    const user = sessionStorage.getItem("usuario")
    if(user == null){
      document.getElementById("logout").classList.add("logoutHide")
    }else{
      const user2 = JSON.parse(user.toString());
      console.log("ENTRA AL COMPARATIVO DEL PAGE FAVORITO " + JSON.parse(user.toString()));
      document.getElementById("nameAccount").textContent = user2.nameU
      document.getElementById("logout").classList.remove("logoutHide")
    }
    console.log("USUARIO " + user);
  }, [])
  
  return (
    <>
        
      <ServicioList_Favorites/> 
        
    </>
  )
}
