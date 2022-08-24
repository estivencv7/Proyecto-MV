import { ServicioList_Favorites } from "../../../service/ServicioFavoritos/ServicioList_Favorites"


export const ConterFavorites = () => {
  return (
    <div style={{background:'black',position:'absolute',bottom:'-500px'}}>
        <ServicioList_Favorites></ServicioList_Favorites>
    </div>
  )
}
