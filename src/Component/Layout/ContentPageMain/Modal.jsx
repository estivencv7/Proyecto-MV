import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'
import { Button } from 'primereact/button';
export const Modal = ({ url, name, description,press }) => {

    const [visible, setVisible] = useState(false);

    const onHide = () => {

        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    return (
        <div>
            <Button onClick={() => onHide(onHide)}>Observar</Button>

            <Dialog visible={visible} onHide={onHide} style={{ width: '70%',height:'70%' }} >
                <div className='content-windows-observar'>
                    <div>
                        <img src={url} alt="" width='550px' />
                    </div>
                    <div>
                        <h1>{name}</h1>
                        <h2>${press}</h2>
                        <hr />
                        <h2>Descripción del producto</h2>
                        <p>{description}</p>
                        <br /><br />
                        <hr />
                        <input type="number" />

                    </div>
                </div>

            </Dialog>
        </div>

    )
}
