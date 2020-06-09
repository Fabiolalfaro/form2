import {Button} from 'antd';
import React, { useState, forwardRef, useImperativeHandle} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import './Adv.css'

const Adver = forwardRef((props,ref) => {
    const [display, setDisplay] = React.useState(true);
  
    useImperativeHandle(ref, () => {
      return {
        openModal: () => open(),
        close: () => close()
      }
    });
  
    const open = () => {
      setDisplay(true)
    };
  
    const close = () => {
      setDisplay(false);
    };
  
    if (display) {
      return (
        <div className={"modal-Wapper"}>
        <div className={"modal-backdrop"} />
          <div className={"modal-box"}>
              <Modal isOpen={display} >
                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Esta seguro de enviar esta informacion?</h2>
                    <FontAwesomeIcon icon='Warning' className="boton2" />
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>                                        
                    <Button onClick={()=> setDisplay()} className="boton" htmlType="submit">
                            Enviar
                        </Button>  
                        <Button onClick={() => modalRef.current.close()} className="boton2" htmlType="submit">
                            Cancelar
                        </Button>  
                  </div>
              </Modal>
          </div>
    </div>
        )
    }
  
    return null;
  
  });
  
  export default Adver;
