import React, { useEffect } from 'react'
import { PageMainFavorito } from '../../Layout/Favorites/PageMainFavorito'
import { HeaderHome } from '../../Layout/HeaderHome/HeaderHome'
import './style.css'
export const PageFavorito = () => {

  return (
    <>
      <HeaderHome />
        
        <PageMainFavorito />

    </>
  )
}
