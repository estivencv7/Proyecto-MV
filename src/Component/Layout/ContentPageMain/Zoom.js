// // import ReactImageMagnify from 'react-image-magnify';
// // import React from 'react'
// // import cama1 from '../../../Images/cama1.jpg'
// // import watchImg300 from '../../../Images/cama1.jpg'
// // export const Zoom = ({style}) => {
// //     return (
// //         <div style={{style}}>

// //             <ReactImageMagnify {...{
// //                 smallImage: {
// //                     alt: 'Wristwatch by Ted Baker London',
// //                     isFluidWidth: true,
// //                     src: watchImg300,
// //                 },
// //                 largeImage: {
// //                     src: watchImg1200,
// //                     width: 1800,
// //                     height: 500
// //                 }
// //             }} />


// //         </div>

// //     )
// // }


// // import Zoom from 'react-medium-image-zoom'
// // import 'react-medium-image-zoom/dist/styles.css'
// import cama1 from '../../../Images/cama1.jpg'

// import { useCallback, useState } from 'react'
// import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'


// export const getZoom= () => {
 
//     const [isZoomed, setIsZoomed] = useState(false)

//   const handleImgLoad = useCallback(() => {
//     setIsZoomed(true)
//   }, [])

//   const handleZoomChange = useCallback(shouldZoom => {
//     setIsZoomed(shouldZoom)
//   }, [])

//   return (
//     <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
//       <img
//         alt="that wanaka tree"
//         onLoad={handleImgLoad}
//         src={cama1}
//         width="500"
//       />
//     </ControlledZoom>
//   )
//   }
