import React,{useEffect,useState,useRef} from 'react'
// import { GetCards } from '../../Component/Layout/ContentPageMain/GetCards';
import { IteratCart } from '../../Component/Layout/ShoppingCart/IteratCart';

export const ListsCart = () => {
    const [carrito, setCarrito] = useState([])
    const [cantida, setcantidad] = useState(0)
    
    
    const getCart = () => {
      const url = 'http://localhost:8080/carritoCompras/listarcarrito';
        fetch(url)
          .then(response => response.json())
          .then(data =>{
            setCarrito(data)
            setcantidad(carrito.length)
           
          } )
      
      
    }
    const visoref=useRef("andres")
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
