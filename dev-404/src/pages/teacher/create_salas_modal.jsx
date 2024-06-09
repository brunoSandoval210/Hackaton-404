import React from 'react';

const CreateSalasModal = ({ onClose }) => {

    return (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <label htmlFor="num-salas">Numero de salas</label>
                <input type="number" id="num-salas" name="num-salas" defaultValue="1" min="1" />

                <label htmlFor="num-alumnos">Cantidad de alumnos por sala</label>
                <input type="number" id="num-alumnos" name="num-alumnos" defaultValue="1" min="1" />

                <div className="radio-group">
                    <input type="radio" id="random" name="assignment" value="random" defaultChecked />
                    <label htmlFor="random">Elegir aleatoriamente</label>
                </div>

                <button type="button" className="btn-create">Crear sala de trabajo</button>
            </div>
        </div>
    );
};

export default CreateSalasModal;
