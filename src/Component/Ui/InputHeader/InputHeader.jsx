import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import {AutoComplete}from 'rsuite'
import { InputText } from 'primereact/inputtext';
import './style.css'
import { Input } from '@material-ui/core';
import { GetCards } from '../../Layout/ContentPageMain/GetCards';
export const InputHeader = ({id}) => {
  
  // const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilters] = useState('');
  const [products, setProducts] = useState([]);

function filtersCategory(category) {

  console.log("LISTANDO PRODUCTOS")
  const urlRegister = 'http://localhost:8080/producto/filtrarCategoria/' + category;
  fetch(urlRegister, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(data => setProducts(data))


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
  console.log("LISTANDO PRODUCTOS")
  const urlRegister = 'http://localhost:8080/producto/listaProductos';
  fetch(urlRegister, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(product => setProducts(product))
  // setLoading(false)
// array.forEach(element => {
//   if (products.id_categoria == filter.id_categoria) {
  

//   }
// });

//   const searcher = (e) =>{
//   }

  
  return (
    <div className='input-wrapper'>
      <i className="pi pi-search input-icon"></i>
     <InputText id={id} onChange={e => filtersCategory(e.target.value)} placeholder='¿Qué estás buscando?' className='autoInput' ></InputText>
     <GetCards getCards={products}/>
    </div>
  )
}
