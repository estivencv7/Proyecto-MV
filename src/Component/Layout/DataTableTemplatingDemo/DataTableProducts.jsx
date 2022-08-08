import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import './DataTableDemo.css';

export const DataTableProducts = () => {
    const [selectedProducts, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'nombre_producto': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'codigo_producto': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'amount': { value: null, matchMode: FilterMatchMode.IN },
        'description': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'price': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'id_categoria.nombre_categoria' : { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);

    let i = products.length;
    useEffect(() => {
        listProducts()
    }, [i])

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
        setLoading(false)
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        console.log(selectedProducts);
        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Productos</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Nombre producto" />
                </span>
            </div>
        )
    }

    const codeBodyTemplate = (product) => {
        return (
            <React.Fragment>
                <span className="text">{product.codigo_producto}</span>
            </React.Fragment>
        );
    }

    const imageBodyTemplate = (product) => {
        return (
            <React.Fragment>
                <img alt="ImagenMuebleria" src={product.foto_producto} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} className='product-image' />
            </React.Fragment>
        );
    }

    const productFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.nombre_producto} options={products} itemTemplate={productsItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    }

    const productsItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt="imgMuebleria" src={option.foto_producto} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
            </div>
        );
    }

    const nameBodyTemplate = (product) => {
        return product.nombre_producto;
    }

    const supplierNameBodyTemplate = (product) => {
        return product.nombre_proveedor_producto;
    }

    const productsRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={products} itemTemplate={productFilterTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }
    
    const amountBodyTemplate = (element) => {
        return element.cantidad_producto;
    }
    
    const descriptionBodyTemplate = (element) => {
        return element.descripcion_producto;
    }
    
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const priceBodyTemplate = (element) => {
        return formatCurrency(element.precio_producto);
    }

    const categoryBodyTemplate = (element) => {
        return element.id_categoria.nombre_categoria;
    }

    const header = renderHeader();

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable value={products} paginator className="p-datatable-customers" header={header} rows={5}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}
                    dataKey="id" rowHover selection={selectedProducts} onSelectionChange={e => setSelectedProduct(e.value)}
                    filters={filters} filterDisplay="menu" loading={loading} responsiveLayout="scroll"
                    globalFilterFields={['nombre_producto', 'codigo_producto', 'cantidad_producto', 'descripcion_producto', 'precio_producto' , 'id_categoria.nombre_categoria' , 'nombre_proveedor_producto']} emptyMessage="No se encontraron productos."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="codigo_producto" header="Codigo" sortable filterField="codigo_producto" body={codeBodyTemplate} filter filterPlaceholder="Search by code" />
                    <Column field="nombre_producto" header="Nombre" sortable filter filterPlaceholder="Search by name" body={nameBodyTemplate}/>
                    <Column field="cantidad_producto" header="Cantidad" sortable filter filterPlaceholder="Search by amount" body={amountBodyTemplate}/>
                    <Column field="descripcion_producto" header="Descripcion" sortable sortField='descripcion_producto' body={descriptionBodyTemplate}/>
                    <Column field="precio_producto" header="Precio" sortable filterField="price" body={priceBodyTemplate}/>
                    <Column header="Imagen producto" sortable sortField="foto_producto" filterField="foto" body={imageBodyTemplate} />
                    <Column field="id_categoria.nombre_categoria" header="Categoria" sortable filter filterPlaceholder="Search by name"  style={{ width: '10%' }} body={categoryBodyTemplate} />
                    <Column field="nombre_proveedor_producto" header="Proveedor" sortable showFilterMatchModes={false} body={supplierNameBodyTemplate} />
                </DataTable>
            </div>
        </div>
    );
}
