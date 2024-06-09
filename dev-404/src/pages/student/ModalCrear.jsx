import React from 'react'
import FormularioCrearTarea from './FormularioCrear.jsx';
const ModalCrear = ({onClose }) => {
    return (
        <div className='modal-crear'>
            <div className='modal-content-crear' style={{ backgroundColor: 'white' }}>
                <span className='close' onClick={onClose}>&times;</span>
                <FormularioCrearTarea onClose={onClose} />
            </div>
        </div>
    );
};

export default ModalCrear;
