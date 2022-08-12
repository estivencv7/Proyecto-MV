import React,{useEffect,useState} from 'react'
// import { GetCards } from '../../Component/Layout/ContentPageMain/GetCards';
import { IteratCart } from '../../Component/Layout/ShoppingCart/IteratCart';

export const ListsCart = () => {
    const [carrito, setCarrito] = useState([])
    
    
    const getCart = () => {
      const url = 'http://localhost:8080/carritoCompras/listarcarrito';
        fetch(url)
          .then(response => response.json())
          .then(data =>{
            console.log("esta es la sista que llega\n"+data)
            setCarrito(data)
            
          } )
    }
  
    useEffect(() => {
        getCart()
        
        //saveObj.push(objProduct)
        //setProductFound(saveObj)
    }, [])
   
    return (
        <div>
            <IteratCart listsCart={carrito}/>
        </div>
     
      
    )
}
