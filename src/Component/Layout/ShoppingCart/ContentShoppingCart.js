import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar/';
import { Button } from 'primereact/button';


import './style.css'
import { ListsCart } from '../../../service/ServiceCarrito/ListsCart';

// import { Contador } from '../../../service/ServiceCarrito/Contador/Contador';
// import { IteratCart } from '../ShoppingCart/IteratCart';
// // import Lista from './Lista';
// import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito';

export const ContentShoppingCart = ({ visible2, onHide }) => {
    
    return (
        <Sidebar position='right' visible={visible2} style={{ width: '40em' }} onHide={onHide}>
            <h1>Carrito</h1>
            <ListsCart/>
        </Sidebar>
    )
}
