
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
import { BaseBeds } from './Component/Ui/Categories/BaseBeds';
import { Furniture } from './Component/Ui/Categories/Furniture';
import { Mattresses } from './Component/Ui/Categories/Mattresses';
import { Service_ListReservesAdmin } from './service/ServiceReserve/Service_ListReservesAdmin';
import { Service_ListReservesClient } from './service/ServiceReserve/Service_ListReservesClient';
import { Service_ReserveExpired } from './service/ServiceReserve/Service_ReserveExpired';
import { Service_ListInvoices } from './service/ServiceInvoice/Service_ListInvoices';
import { Service_UpdateUser } from './service/ServiceUser/Service_UpdateUser';
import { PageComingSoon } from './Component/Page/PagerComingSoon/PageComingSoon';

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
        <Route path='/baseBeds' element={<BaseBeds/>}/>
        <Route path='/pageFavorito' element={<PageFavorito/>}/>
        <Route path='furniture' element={<Furniture/>}/>
        <Route path='mattresses' element={<Mattresses/>}/>
        <Route path='listReserves' element={<Service_ListReservesAdmin/>}/>
        <Route path='listReservesClient' element={<Service_ListReservesClient/>}/>
        <Route path='chairs' element={<Chairs/>}/>
        <Route path='reservesExpired' element={<Service_ReserveExpired/>}/>
        <Route path='listInvoices' element={<Service_ListInvoices/>}/>
        <Route path='pageEditProfile' element={<Service_UpdateUser/>}/>
        <Route path='/registerProximo' element={<PageComingSoon/>}/>
      </Routes>
    </div>
  );
}

export default App;
function name(params) {
  return
  
}