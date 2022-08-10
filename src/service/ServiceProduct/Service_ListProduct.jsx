import React,{useState,useEffect} from 'react'
import { GetCards } from '../../Component/Layout/ContentPageMain/GetCards';

export const Service_ListProduct = () => {

  
  const [product, setProduct] = useState([])
  // const [save, setSave] = useState([])
  
  const getProducts = () => {
    const url = 'http://localhost:8080/producto/listaProductos';
      fetch(url)
        .then(response => response.json())
        .then(data =>{
          console.log("esta es la sista que llega\n"+data)
          setProduct(data)
        } )
  }

  useEffect(() => {
      getProducts()
      //saveObj.push(objProduct)
      //setProductFound(saveObj)
  }, [])
 
  return (
    <GetCards getCards={product}/>
  )
}
