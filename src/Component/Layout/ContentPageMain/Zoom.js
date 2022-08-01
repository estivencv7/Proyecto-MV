import ReactImageMagnify from 'react-image-magnify';
import React from 'react'
import watchImg1200 from '../../../Images/cama1.jpg'
import watchImg300 from '../../../Images/cama1.jpg'
export const Zoom = ({style}) => {
    return (
        <div style={{style}}>

            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: watchImg300,
                },
                largeImage: {
                    src: watchImg1200,
                    width: 1800,
                    height: 500
                }
            }} />


        </div>

    )
}
