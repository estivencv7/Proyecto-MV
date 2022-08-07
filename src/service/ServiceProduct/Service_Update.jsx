import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioGroup } from 'rsuite';

export const Service_Update = ({codeProductUpdate}) => {

    const [productSearch , setProducts] = useState(null);
    const [visible, setVisible] = useState(false);
    const [image, setImageProduct] = useState("");
    const [loading, setLoading] = useState(true);
    const [name_supplier_product, setNameSupplierProduct] = useState("")
    const [code , setCodeProduct] = useState(0)
    const [idCategory , setIdCategory] = useState(0)
    const [nameCategory , setNameCategory] = useState("")

    function searchProduct () {
        const urlRegister = 'http://localhost:8080/producto/buscar/' + document.getElementById("inputSearch").value;
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(product => createElements(product))
        setLoading(false)
    }    
    
    const createElements = (prod) => {
        const dataProductsContainer = document.getElementById("dataProductsContainer");
        const inputName = document.createElement("input")
        const inputCode = document.createElement("input")
        const inputAmount = document.createElement("input")
        const imgPhoto = document.createElement("img")
        const inputPrice = document.createElement("input")
        const inputDescription = document.createElement("input")
        inputCode.placeholder = prod.codigo_producto
        inputName.placeholder = prod.nombre_producto
        inputName.setAttribute('type','text')
        inputName.setAttribute('id','inputName')
        inputAmount.placeholder = prod.cantidad_producto
        inputAmount.setAttribute('type','number')
        inputAmount.setAttribute('id','inputAmount')
        imgPhoto.setAttribute('src',prod.foto_producto)
        inputPrice.placeholder = prod.precio_producto
        setCodeProduct(prod.codigo_producto)
        setImageProduct(prod.foto_producto)
        inputPrice.setAttribute('id','inputPrice')
        inputDescription.placeholder = prod.descripcion_producto
        inputDescription.setAttribute('id','inputDescription')
        dataProductsContainer.appendChild(inputCode)
        dataProductsContainer.appendChild(inputName)
        dataProductsContainer.appendChild(inputAmount)
        dataProductsContainer.appendChild(inputPrice)
        dataProductsContainer.appendChild(inputDescription)
        dataProductsContainer.appendChild(imgPhoto)
        checkCategories()
    }

    function listCategories(){
        const urlRegister = 'http://localhost:8080/categorias/listarCategorias';
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(supplier => createRadioElements(supplier))    
    }

    const createRadioElements = (categoriesList) => {
        console.log(categoriesList.length);
        let i = 0;
        const radioContainer = document.getElementById("categoryGroup");
        const labelContainer = document.getElementById("labelGroup");
        while(i <= categoriesList.length){
            categoriesList.forEach(element => {
                const optionRadio = document.createElement("input")
                optionRadio.setAttribute("type","radio")
                optionRadio.setAttribute("id",element.id_categoria)
                optionRadio.setAttribute("name","productos")
                optionRadio.setAttribute("className" , "radioProductos")
                console.log("ELEMENT: " + element.nombre_categoria);
                optionRadio.setAttribute("value",element.nombre_proveedor)
                const labelRadio = document.createElement("label")
                if(element.nombre_categoria == ""){
                    labelRadio.textContent = "Sin nombre registrado"    
                }else{
                    labelRadio.textContent = element.nombre_categoria
                }
                labelContainer.appendChild(labelRadio)
                radioContainer.appendChild(optionRadio)
                i++
            })
            break;
        }
    }

    
    const seew=()=>{
       
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        } 
    }

    function editProduct() {
        console.log("estoy registrando un producto")
        const name_product = document.getElementById("inputName").value
        const description = document.getElementById("inputDescription").value
        const price = document.getElementById("inputPrice").value
        const amount = document.getElementById("inputAmount").value
        const urlRegister = 'http://localhost:8080/producto/actualizar/' + codeProductUpdate;
        fetch(urlRegister, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                codigo_producto : code,
                nombre_producto: name_product,
                descripcion_producto: description,
                precio_producto: price,
                cantidad_producto : amount,
                foto_producto:image,
                id_categoria : {
                    id_categoria : idCategory,
                    nombre_categoria : nameCategory
                },
                nombre_proveedor_producto : name_supplier_product
            })
        })
            .then(response => console.log(response.json))
            .then(json => {
                if(json.ok){
                    alert("Registro exitoso")
                }else{
                    alert("Ocurrio un error")
                }
            })
    }

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
            .then(supplier => createSelectElements(supplier))
    }

    const createSelectElements = (supplierList) => {
        console.log(supplierList.length);
        let i = 0;
        const selectContainer = document.getElementById("selectContainer");
        const optionSelect = document.createElement("option")
        optionSelect.textContent = "Seleccione un proveedor";
        optionSelect.setAttribute("value","")
        selectContainer.appendChild(optionSelect)
        while(i <= supplierList.length){
            supplierList.forEach(element => {
                const optionSelect = document.createElement("option")
                console.log("ELEMENT: " + element.nombre_proveedor);
                optionSelect.textContent = element.nombre_proveedor;
                optionSelect.setAttribute("value",element.nombre_proveedor)
                // optionSelect.setAttribute("onClick",catchSupplierName(optionSelect))
                selectContainer.appendChild(optionSelect)
                i++
            })
            break;
        }
    }

    function checkCategories(){
        while(document.getElementById('categoryGroup').lastChild){
            document.getElementById('categoryGroup').removeChild(document.getElementById('categoryGroup').lastChild)
        }
        listCategories();
    }

    function checkSuppliers(){
        while(document.getElementById('selectContainer').lastChild){
          document.getElementById('selectContainer').removeChild(document.getElementById('selectContainer').lastChild)
        }
        listSuppliers();
      }

  return (
    <>
        <Button onClick={()=>seew(seew)}><i className='pi pi-user-edit icons-registerProduct'></i></Button>
        <Dialog visible={visible} modal onHide={seew} style={{ width: '30em',bordeRadius:'100%'}} >
           
            <div>
                <input type="button" onClick={searchProduct} id='inputSearch' value={codeProductUpdate}/>
            </div>
            <hr />
            
            <div className='category'>
                    <div>
                        <RadioGroup id='categoryGroup' onChange={e => setIdCategory(e.target.value)} className='radioGroup'>
                            

                        </RadioGroup>
                    </div>
                    <div id='labelGroup' className='labelGroup'>
                        
                    </div>  
                </div>        

            <div id='dataProductsContainer'>

            </div>
            <div>
                <select id='selectContainer' onChange={e => setNameSupplierProduct(e.target.value)} onClick={checkSuppliers} >

                </select>
            </div>
            <div>
                <button onClick={editProduct}>Guardar</button>
            </div>
        </Dialog>

    </>
  )
}
