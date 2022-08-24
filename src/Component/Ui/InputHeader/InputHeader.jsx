import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import {AutoComplete}from 'rsuite'
import { InputText } from 'primereact/inputtext';
import './style.css'
import { Input } from '@material-ui/core';
import { GetCardsCategory } from '../../Layout/ContentPageMain/GetCardsCategory';
export const InputHeader = ({id}) => {
  
  // const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilters] = useState('');
  const [products, setProducts] = useState([]);

function filtersCategory() {
  console.log("CATEGORIA " );
  console.log(document.getElementById("inpuText").value);
  console.log("LISTANDO PRODUCTOS")
  const urlRegister = 'http://localhost:8080/producto/filtrarCategoria/' + document.getElementById("inpuText").value;
  fetch(urlRegister, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        createElements()
      })


}

function createElements(){
  <GetCardsCategory getCards={products}/>
  const categoryContainer = document.getElementById("categoryContainer")
  if(document.getElementById("conter_car") == null){
  const div = document.createElement("div")
  if(document.getElementById("categoryContainer") == null){
      document.getElementById("conter_car").replaceWith(div)
  }else if(document.getElementById("conter_car") == null){
      document.getElementById("categoryContainer").replaceWith(div)
  }
  }else{
    document.getElementById("conter_car").replaceWith(categoryContainer)
  }
}
// function listProducts() {

//   console.log("LISTANDO PRODUCTOS")
//   const urlRegister = 'http://localhost:8080/producto/listaProductos';
//   fetch(urlRegister, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//       .then(response => response.json())
//       .then(product => setProducts(product))
// }
// products.forEach(element => {
  // setLoading(false)
// // array.forEach(element => {
// array.forEach(element => {
//   if (products.id_categoria == filter.id_categoria) {
  

//   }
// });

//   const searcher = (e) =>{
//   }

  
  return (
    <div className='input-wrapper'>
      <i className="pi pi-search input-icon" onClick={filtersCategory}></i>
     <InputText  id='inpuText' placeholder='¿Qué estás buscando?' className='autoInput' ></InputText>
     <GetCardsCategory getCards={products}/>
    </div>
  )
}
