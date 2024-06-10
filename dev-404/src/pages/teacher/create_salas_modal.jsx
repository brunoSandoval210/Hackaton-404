
import React from 'react';

const CreateSalasModal = ({ onClose, onCreate, cursoId }) => {

    const handleCreateSala = async () => {
        try {

            const curso_id = cursoId;
            const cantidad_salas = document.getElementById('num-salas').value;
            const cantidad_alumnos_por_sala = document.getElementById('num-alumnos').value;
            const type  = document.getElementById('random').checked; 

            var response;

            if(1){
                response = await fetch('http://localhost:3001/api/rooms/crear_salas', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        curso_id,
                        cantidad_salas,
                        cantidad_alumnos_por_sala,
                        type
                    })
                });
            }else{
                // response = await fetch('http://localhost:3001/api/rooms/crear_salas', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         curso_id,
                //         cantidad_salas,
                //         cantidad_alumnos_por_sala
                //     })
                // });
            }
            console.log(response);

            if (!response.ok) {
                throw new Error('Error al crear la sala');
            }

            onCreate();
            onClose();
        } catch (error) {
            console.error('Error al crear la sala:', error);
        }
    };

    return (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <label htmlFor="num-salas">Numero de salas</label>
                <input type="number" id="num-salas" name="num-salas" defaultValue="1" min="1" />

                <label htmlFor="num-alumnos">Cantidad de alumnos por sala</label>
                <input type="number" id="num-alumnos" name="num-alumnos" defaultValue="1" min="1" />

                <div className="radio-group">
                    <input type="checkbox" id="random" name="assignment" value="random"/>
                    <label htmlFor="random">Elegir aleatoriamente</label>
                </div>

                <button type="button" className="btn-create"  onClick={handleCreateSala}>Crear sala de trabajo</button>
            </div>
        </div>
    );
};

export default CreateSalasModal;









