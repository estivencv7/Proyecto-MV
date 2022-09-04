import React from 'react'

export const ListInvoicesPerClient = ({codeInvoice}) => {
    let URLDownloadPDF = "http://localhost:8080/facturas/consultarFactura/" + codeInvoice;
    return (
        <button><a href={URLDownloadPDF}><i className='pi pi-file-pdf'></i></a></button>
    )
}
