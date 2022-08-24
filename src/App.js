
//import { Cloudinary } from './Component/Cloudinary/Cloudinary';
import 'primereact/resources/themes/saga-green/theme.css'
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Component/Page/Home/Home";
import { RegisterUser } from "./Component/Page/RegisterUser/RegisterUser";
import { Route , Routes} from "react-router-dom";
import { RegisterProduct } from './Component/Page/RegisterProduct/RegisterProduct';
import { PageMainAdmin } from './Component/Page/PageMainAdmin/PageMainAdmin';
import { RegisterProvider } from './Component/Page/RegisterProvider/RegisterProvider';
import { RegisterCategories } from './Component/Page/RegisterCategories/RegisterCategories';
import { PageFavorito } from './Component/Page/PageFavorito/PageFavorito';
import { Chairs } from './Component/Ui/Categories/Chairs';
import { PageProductsFilter } from './Component/Page/PageProductsFilter/PageProductsFilter';



function App() {
  return (
    <div className="App">
 {/* <Cloudinary></Cloudinary> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registerUser" element={<RegisterUser/>}  />
        <Route path='registerProduct' element={<RegisterProduct/>}/>
        <Route path='PageAdminMain' element={<PageMainAdmin />}/>
        <Route path='registerProvider' element={<RegisterProvider/>}/>
        <Route path='registerCategories' element={<RegisterCategories/>}/>
        <Route path='/pageProductsFilter' element={<PageProductsFilter/>}/>

        <Route path='/pageFavorito' element={<PageFavorito/>}/>

        <Route path='chairs' element={<Chairs/>}/>
      </Routes>
    </div>
  );
}

export default App;
function name(params) {
  return
  
}