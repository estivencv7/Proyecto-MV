import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import {AutoComplete}from 'rsuite'

import { InputText } from 'primereact/inputtext';
import './style.css'
import { Input } from '@material-ui/core';
export const InputHeader = () => {
  
  // const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilters] = useState('');
  
//   const [globalFilterValue, setGlobalFilterValue] = useState('');

//   const [filters, setFilters] = useState({
//     'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
//     'nombre_producto': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
//     'id_categoria.nombre_categoria': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
// });


// const onGlobalFilterChange = (e) => {
//   const value = e.target.value;
//   let _filters = { ...filters };
//   _filters['global'].value = value;
//   setFilters(_filters);
//   setGlobalFilterValue(value);
// }

// // value={products} paginator className="p-datatable-customers" header={header} rows={5}
// // paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[5, 10, 15]}
// // dataKey="id" rowHover onSelectionChange={e => setSelectedProduct(e.value)}
// // filters={filters} filterDisplay="menu" loading={loading} responsiveLayout="scroll"
// // globalFilterFields={['nombre_producto', 'codigo_producto', 'cantidad_producto', 'descripcion_producto', 'precio_producto', 'id_categoria.nombre_categoria', 'nombre_proveedor_producto']} emptyMessage="No se encontraron productos."
// // currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos">

//   const names=[
    
//       "muebles",
//       "salas",
//       "comedores",
//       "armarios",
//       "peinadores",
//       "fruteros",
//       "base camas",
//       "mesas",
//       "sillas"
// value={globalFilterValue} onChange={onGlobalFilterChange}
//   ]

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
      .then(categori => setFilters(categori))
}

  const searcher = (e) =>{
  }

  
  return (
    <div className='input-wrapper'>
      <i className="pi pi-search input-icon"></i>
     <InputText onChange={e => filtersCategory(e.target.value)} placeholder='¿Qué estás buscando?' className='autoInput' ></InputText>
    </div>
  )
}
