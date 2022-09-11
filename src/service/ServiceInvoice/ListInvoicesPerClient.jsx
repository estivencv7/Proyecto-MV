import React from 'react'
import './ServiceInvoice.css'

export const ListInvoicesPerClient = ({codeInvoice}) => {
    let URLDownloadPDF = "http://localhost:8080/facturas/consultarFactura/" + codeInvoice;
    return (
        <button className='btnDownloadPDF'><a href={URLDownloadPDF}><i className='pi pi-file-pdf pdfDownload'></i></a></button>
    )
}
