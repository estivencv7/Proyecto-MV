import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import './DataTableDemo.css';

export const DataTableProvider = () => {
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [provider, setProvider] = useState([]);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'nombre_proveedor': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'cedula_proveedor': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'telefono_proveedor': { value: null, matchMode: FilterMatchMode.IN },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);

    let i = provider.length;
    useEffect(() => {
        listSuppliers()
        
    }, [provider])

    function listSuppliers() {

        console.log("LISTANDO PROVEEDORES")
        const urlRegister = 'http://localhost:8080/proveedores/listaProveedores';
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(provider => setProvider(provider))
        console.log(provider);
        setLoading(false)
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Proveedores</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Documento" />
                </span>
            </div>
        )
    }

    const codeBodyTemplate = (provider) => {
        return (
            <React.Fragment>
                <span className="text">{provider.cedula_proveedor}</span>
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (provider) => {
        return provider.nombre_proveedor;
    }

    const amountBodyTemplate = (element) => {
        return element.telefono_proveedor;
    }
    

    const header = renderHeader();

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable value={provider} paginator className="p-datatable-customers" header={header} rows={5}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}
                    dataKey="id" rowHover selection={selectedProvider} onSelectionChange={e => setSelectedProvider(e.cedula_proveedor)}
                    filters={filters} filterDisplay="menu" loading={loading} responsiveLayout="scroll"
                    globalFilterFields={['nombre_proveedor', 'cedula_proveedor', 'telefono_proveedor']} emptyMessage="No se encontraron proveedores."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="cedula_proveedor" header="Documento" sortable filterField="cedula_proveedor" body={codeBodyTemplate} filter filterPlaceholder="Search by code" />
                    <Column field="nombre_proveedor" header="Nombre" sortable filter filterPlaceholder="Search by name" body={nameBodyTemplate}/>
                    <Column field="telefono_proveedor" header="Telefono" sortable filter filterPlaceholder="Search by amount" body={amountBodyTemplate}/>
                </DataTable>
            </div>
        </div>
    );
}
