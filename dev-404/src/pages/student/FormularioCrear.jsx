import React, { useState } from 'react';

const FormularioCrearTarea = ({onCreate}) => {
    const [nombreTarea, setNombreTarea] = useState('');
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [asignadoA, setAsignadoA] = useState('');
    const [estado, setEstado] = useState('pendiente');

    const handleCrearTarea = () => {
        // Aquí podrías agregar la lógica para crear la tarea utilizando los datos ingresados
        //solo mostraremos los datos en la consola
        const nuevaTarea = {
            nombre: nombreTarea,
            descripcion: descripcionTarea,
            asignadoA: asignadoA,
            estado: estado
        };
        console.log("Nueva tarea:", nuevaTarea);
        // Luego puedes cerrar el modal
        onClose();
    };

    return (
        <div className='modal-formulario'>
            <div className='modal-content-formulario'>
                <h2>Crear tarea</h2>
                <div className='form-group'>
                    <div className="nombre-tarea">
                        <label htmlFor='nombreTarea'>Nombre de la Tarea:</label>
                    </div>
                    <input type='text' id='nombreTarea' value={nombreTarea} onChange={(e) => setNombreTarea(e.target.value)} />
                </div>
                <div className='form-group'>
                    <div className="descripcion-tarea">
                        <label htmlFor='descripcionTarea'>Descripción de la Tarea:</label>
                    </div>
                    <textarea id='descripcionTarea' value={descripcionTarea} onChange={(e) => setDescripcionTarea(e.target.value)} />
                </div>
                <div className='form-group'>
                    <div className="asignadoA-tarea">
                        <i class="fas fa-user icon"></i>
                        <label htmlFor='asignadoA'>Asignado a:</label>
                    </div>
                    
                    <select id='Asignadoa' value={asignadoA} onChange={(e) => setAsignadoA(e.target.value)}>
                        <option value="" disabled selected>Elija integrante</option>
                        <option value='pendiente'>Pendiente</option>
                        <option value='en_proceso'>En Proceso</option>
                        <option value='realizado'>Realizado</option>
                    </select>
                    
                </div>
                <div className='form-group'>
                    <div className="estado-tarea">
                        <label htmlFor='estado'>Estado:</label>
                    </div>
                    <select id='estado' value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value='pendiente'>Pendiente</option>
                        <option value='en_proceso'>En Proceso</option>
                        <option value='realizado'>Realizado</option>
                    </select>
                </div>
                <div className="modal-form-botones">
                    <div className="boton">
                        <button onClick={handleCrearTarea}>Crear tarea</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FormularioCrearTarea;