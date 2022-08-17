import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React,{useState,useEffect}from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioGroup } from 'rsuite';
import { InputNumber } from 'primereact/inputnumber';
import './css/registerProduct.css'

export const Service_Update = ({codeProductUpdate}) => {

    const [productSearch , setProducts] = useState(null);
    const [visible, setVisible] = useState(false);
    const [image, setImageProduct] = useState("");
    const [loading, setLoading] = useState(true);
    const [name_supplier_product, setNameSupplierProduct] = useState("")
    const [code , setCodeProduct] = useState(0)
    const [idCategory , setIdCategory] = useState(0)
    const [nameCategory , setNameCategory] = useState("")
    const [product, setProductos] = useState("")

    function searchProduct () {
        const urlRegister = 'http://localhost:8080/producto/buscar/' + codeProductUpdate;
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(product => guardarProduc(product))
        setLoading(false)
    }    

    const guardarProduc = (prod) =>{
        setProductos(prod)
        setCodeProduct(prod.codigo_producto)
        setImageProduct(prod.foto_producto)
        checkCategories()
        checkSuppliers()
    }
    

/*
    const createElements = (prod) => {
        const dataProductsContainer = document.getElementById("dataProductsContainer");
        const inputName = document.createElement("input")
        const inputCode = document.createElement("input")
        const inputAmount = document.createElement("input")
        const imgPhoto = document.createElement("img")
        const inputPrice = document.createElement("input")
        const inputDescription = document.createElement("input")
        setProducts(prod)
        inputCode.placeholder = prod.codigo_producto
        inputName.placeholder = prod.nombre_producto
        inputName.setAttribute('type','text')
        inputName.setAttribute('id','inputName')
        inputAmount.placeholder = prod.cantidad_producto
        inputAmount.setAttribute('type','number')
        inputAmount.setAttribute('id','inputAmount')

        inputName.className('edit-name')
        inputCode.className('edit-code')
        inputAmount.className('edit-amount')
        inputPrice.className('edit-price')
        inputDescription.className('edit-description')
        setCodeProduct(prod.codigo_producto)
        setImageProduct(prod.foto_producto)
        inputPrice.setAttribute('id','inputPrice')
        inputPrice.setAttribute('type','number')
        inputPrice.placeholder = prod.precio_producto
        inputDescription.placeholder = prod.descripcion_producto
        inputDescription.setAttribute('id','inputDescription')
        dataProductsContainer.append('Codigo')
        dataProductsContainer.appendChild(inputCode)
        dataProductsContainer.append('Nombre')
        dataProductsContainer.appendChild(inputName)
        dataProductsContainer.append('Cantidad')
        dataProductsContainer.appendChild(inputAmount)
        dataProductsContainer.append('Precio')
        dataProductsContainer.appendChild(inputPrice)
        dataProductsContainer.append('Descripcion')
        dataProductsContainer.appendChild(inputDescription)
        checkCategories()
        checkSuppliers()
    }
*/
    function listCategories(){
        const urlRegister = 'http://localhost:8080/categorias/listarCategorias';
        fetch(urlRegister, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(categories => createSelectElementsCategories(categories))    
    }

    
    const setDataCategory = (category) => {
        console.log(category);
        fetch("http://localhost:8080/producto/consultarCategoria/" + category, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(product =>  {
            setNameCategory(product.nombre_categoria);
            setIdCategory(product.id_categoria)
        })
    }

    const createSelectElementsCategories = (categoriesList) => {
        let i = 0;
        const selectContainer = document.getElementById("selectContainerCategories");
        const optionSelect = document.createElement("option")
        optionSelect.textContent = "Seleccione una categoria";
        optionSelect.setAttribute("value","Vacio")
        selectContainer.appendChild(optionSelect)
        while(i <= categoriesList.length){
            categoriesList.forEach(element => {
                const optionSelect2 = document.createElement("option")
                console.log("ELEMENT CATEGORY: " + element.nombre_categoria);
                optionSelect2.textContent = element.nombre_categoria;
                optionSelect2.setAttribute("value",element.id_categoria)
                // optionSelect.setAttribute("onClick",catchSupplierName(optionSelect))
                selectContainer.appendChild(optionSelect2)
                i++
            })
            break;
        }
    }

    
    const seew=()=>{
       
        if (visible == false) {
            searchProduct()
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
        console.log(name_supplier_product);
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
            .then(response => response.json())
            .then(json => {
                if(json.ok){
                    alert("Registro exitoso")
                }else{
                    alert("Registro exitoso")
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
                const optionSelect2 = document.createElement("option")
                console.log("ELEMENT: " + element.nombre_proveedor);
                optionSelect2.textContent = element.nombre_proveedor;
                optionSelect2.setAttribute("value",element.nombre_proveedor)
                selectContainer.appendChild(optionSelect2)
                i++
            })
            break;
        }
    }

    function checkCategories(){
        while(document.getElementById('selectContainerCategories').lastChild){
            document.getElementById('selectContainerCategories').removeChild(document.getElementById('selectContainerCategories').lastChild)
        }
        listCategories();
    }

    function checkSuppliers(){
        while(document.getElementById('selectContainer').lastChild){
          document.getElementById('selectContainer').removeChild(document.getElementById('selectContainer').lastChild)
        }
        listSuppliers();
      }

      const uploadimage=async(e)=>{
        console.log("entro")
        const files=e.target.files;
        const data=new FormData()
        data.append("file",files[0])
        data.append("upload_preset","images");
        setLoading(true)
        const res=await fetch("https://api.cloudinary.com/v1_1/estivencloud/image/upload",
        {
        method:"POST",
        body:data
        }
        )
        const file=await res.json();
        console.log(res)
        console.log(idCategory);
        setImageProduct(file.secure_url)
        setLoading(false)
    }
    const header=(
        <div className='div-update'>
           Editar Productos
       </div>
    )
    /*<div id='dataProductsContainer' className='dataProductsContainer'></div>
    <div className='barra-desplegable'>
    */
  return (
    <>
        <Button onClick={()=>seew(seew)}><i className='pi pi-user-edit icons-registerProduct'></i></Button>
        <Dialog header={header} visible={visible} modal onHide={seew} style={{ width: '30em',bordeRadius:'100%'}} className='dialogoRegisterProduct' >     
            <div className='content-image'>
            
                <div className='cont-update'>     
                
                    <div className='form'>
                        <InputText type='text' className='input-update' placeholder={product.nombre_producto}/>
                        <InputTextarea type='' placeholder={product.descripcion_producto}/>
                        
                        <div className='cantidad'>
                            <InputNumber className='input-update inputpress' placeholder={product.precio_producto}/>
                            <InputNumber className='input-update inputpress' placeholder={product.cantidad_producto}/>
                        </div>
                
                    
                        <div className='optionsProduc'>

                            <div className='category-update'>
                                <div>
                                <div className='paredCategories'></div>
                                    <select name="selectContainerCategories" id="selectContainerCategories" onChange={e => setDataCategory(e.target.value)} className='radioGroup'>

                                    </select>
                                </div>
                                <div id='labelGroup' className='labelGroup'> </div>
                            </div>

                            <div className='provider-update'>
                                <div className='paredProvider'></div>
                                    <select name='selectContainer' id='selectContainer' onChange={e => setNameSupplierProduct(e.target.value)} className='radioGroup' >
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-Input-file'>
                        {loading ? (<h3>cargando imagen</h3>):(<img className='image-product-update' src={image} />)}
                        <InputText className='input-update-imges'  id='catch' type='file' name='file' placeholder='subirImg' onChange={uploadimage}  />
                    </div>
            </div>
            <div className='save-edit'>
                <Button onClick={editProduct}  >Guardar</Button>
            </div>
        </Dialog>
    </>
  )
}
