import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'
import { Button } from 'primereact/button';
export const Modal = ({ url,name,description,press }) => {

    const [visible, setVisible] = useState(false);
    const [vis, setVis] = useState(false);

    // const im=document.getElementById('featured');

    const onHide = () => {

        if (visible == false) {
            setVisible(true)
            imageZoom()

        } else {
            setVisible(false)
            setVis(false)
        }
    }

    const imageZoom = () => {
        // const im =document.getElementById(i)
        const img = document.getElementById('featured');
        const lens = document.getElementById('lens')


        lens.style.backgroundImage = `url( ${img.src} )`

        let ratio = 1.7

        lens.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px';
        

        img.addEventListener("mousemove", moveLens)
        lens.addEventListener("mousemove", moveLens)
        img.addEventListener("touchmove", moveLens)

        function moveLens() {
            /*
            Function sets sets position of lens over image and background image of lens
            1 - Get cursor position
            2 - Set top and left position using cursor position - lens width & height / 2
            3 - Set lens top/left positions based on cursor results
            4 - Set lens background position & invert
            5 - Set lens bounds
        
            */

            //1
            let pos = getCursor()
            //console.log('pos:', pos)

            //2
            let positionLeft = pos.x - (lens.offsetWidth / 3)
            let positionTop = pos.y - (lens.offsetHeight / 3)

            //5
            if (positionLeft < 0) {
                positionLeft = 0
            }

            if (positionTop < 0) {
                positionTop = 0
            }

            if (positionLeft > img.width - lens.offsetWidth / 2) {
                positionLeft = img.width - lens.offsetWidth / 2
            }

            if (positionTop > img.height - lens.offsetHeight / 2) {
                positionTop = img.height - lens.offsetHeight / 2
            }


            //3
            lens.style.left = positionLeft + 'px';
            lens.style.top = positionTop + 'px';

            //4
            lens.style.backgroundPosition = "-" + (pos.x * ratio) + 'px -' + (pos.y * ratio) + 'px'
        }

        function getCursor() {
            /* Function gets position of mouse in dom and bounds
             of image to know where mouse is over image when moved
            
            1 - set "e" to window events
            2 - Get bounds of image
            3 - set x to position of mouse on image using pageX/pageY - bounds.left/bounds.top
            4- Return x and y coordinates for mouse position on image
            
             */

            let e = window.event
            let bounds = img.getBoundingClientRect()

            //console.log('e:', e)
            //console.log('bounds:', bounds)
            let x = e.pageX - bounds.left
            let y = e.pageY - bounds.top
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;

            return { 'x': x, 'y': y }
        }

    }

    return (
        <div>
            <Button onClick={() => onHide(onHide)} className='button-observar'>Observar</Button>

            <Dialog visible={visible} onHide={onHide} style={{ width: '70%', height: '70%' }}  >

                <div id="content-wrapper">

                    {/* <div className="column"> */}
                        <div id="img-container">
                            <div id="lens"></div>
                            <img id='featured' src={url} onMouseMove={imageZoom} />
                        </div>
                    {/* </div> */}

                    <div>
                        <h1>{name}</h1>
                        <h2>${press}</h2>
                        <hr />
                        <h2>Descripción del producto</h2>
                        <p className='description'>{description}</p>
                        <br /><br />
                        <hr />
                        <div className='divQuantity'>
                            <input className='Quantity' type="number"  placeholder='Cantidad'/>
                            <Button>AGREGAR AL CARRITO</Button>
                        </div>
                       

                    </div>

                </div>


            </Dialog>
        </div>

    )
}


{/* <div className='column'  >
                    <div id='img-container'>
                        <div id='lens' ></div>
                        <img  src={url} alt="" id='featured' onClick={imageZoom} />
                    </div>

                </div> */}

{/* <div>
                        <h1>{name}</h1>
                        <h2>${press}</h2>
                        <hr />
                        <h2>Descripción del producto</h2>
                        <p>{description}</p>
                        <br /><br />
                        <hr />
                        <input type="number" />

                    </div> */}
{/* </div> */ }
