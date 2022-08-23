import React from 'react'

export const Favorites = ({codigo,nam,descriptionP,pressP,pressT,cantidadP,imagenP}) => {

    
    function lis(){
        let gurdar=[]
        return gurdar
    }

    
    let gurdar2=[]
    let gurdar3=[]
    const saveLocalStore=()=>{
       

        let producto={
            id:codigo,
            nombreProduct:nam,
            descriptionProduct:descriptionP,
            pressProduct:pressP,
            pressTotal:pressT,
            cantidad:cantidadP,
            image:imagenP
        }
        
        gurdar3.push(producto)

        localStorage.setItem("producto",  JSON.stringify(gurdar3) ); 

        if(localStorage.getItem("producto")){
            let producto=JSON.parse(localStorage.getItem("producto"));
            console.log(producto)   
        }else{
            console.log("vacio")

        }
    }

   
  return (
    <button onClick={saveLocalStore}   className='heart'><i className='pi pi-heart heart-icon'></i></button>
  )
}
