
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './DataTableDemo.css';
import { Col } from 'reactstrap';

export const DataTableTemplatingDemo = () => {
    const [products, setProducts] = useState([]);
    // const productService = new ProductService();
    
    function listProducts() {

        console.log("LISTANDO PRODUCTOS")
        const urlRegister = 'http://localhost:8080/producto/listaProductos';
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(product => setProducts(product))
            console.log(products);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const codeBodyTemplate = (element) => {
        return element.codigo_producto;
    }

    const supplierNameBodyTemplate = (element) => {
        return element.nombre_proveedor_producto;
    }

    const nameBodyTemplate = (element) => {
        return element.nombre_producto;
    }

    const amountBodyTemplate = (element) => {
        return element.cantidad_producto;
    }

    const priceBodyTemplate = (element) => {
        return formatCurrency(element.precio_producto);
    }

    const descriptionBodyTemplate = (element) => {
        return element.descripcion_producto;
    }

    const imageBodyTemplate = (element) => {
        return <img src={element.foto_producto} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="imgProd" className="product-image" />;
    }

    const categoryBodyTemplate = (element) => {
        return element.id_categoria.nombre_categoria;
    }

    const header = (
        <div className="table-header">

            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = `En total hay ${products ? products.length : 0} productos.`;
    let i = products.length;
    useEffect(() => {
        listProducts()
    }, [i])
    
    return (
        <div className="datatable-templating-demo" >
            <div className="table-produc">
            <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll" >
                <Column field='code' header="Codigo" body={codeBodyTemplate}></Column>
                <Column field="name" header="Nombre" body={nameBodyTemplate}></Column>
                <Column field='amount' header="Cantidad" body={amountBodyTemplate}></Column>
                <Column field='price' header="Precio" body={priceBodyTemplate}></Column>
                <Column field='description' header="Descripcion" body={descriptionBodyTemplate}></Column>
                <Column field='image' header="Imagen" body={imageBodyTemplate}></Column>
                <Column field='category' header="Categoria" body={categoryBodyTemplate}></Column>
                <Column field='nameSupplier' header="Nombre Proveedor" body={supplierNameBodyTemplate}></Column>
           </DataTable>
            </div>
        </div>
    );
}
                 