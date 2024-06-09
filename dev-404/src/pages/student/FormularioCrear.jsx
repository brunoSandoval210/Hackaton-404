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
            <div className='modal-content-formulario' style={{ backgroundColor: 'white' }}>
                
                <h2>Crear Tarea</h2>
                <div className='form-group'>
                    <label htmlFor='nombreTarea'>Nombre de la Tarea:</label>
                    <input type='text' id='nombreTarea' value={nombreTarea} onChange={(e) => setNombreTarea(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='descripcionTarea'>Descripción de la Tarea:</label>
                    <textarea id='descripcionTarea' value={descripcionTarea} onChange={(e) => setDescripcionTarea(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='asignadoA'>Asignado a:</label>
                    <select id='Asignadoa' value={asignadoA} onChange={(e) => setAsignadoA(e.target.value)}>
                        <option value='pendiente'>Pendiente</option>
                        <option value='en_proceso'>En Proceso</option>
                        <option value='realizado'>Realizado</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='estado'>Estado:</label>
                    <select id='estado' value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value='pendiente'>Pendiente</option>
                        <option value='en_proceso'>En Proceso</option>
                        <option value='realizado'>Realizado</option>
                    </select>
                </div>
                <div className="modal-form-botones">
                    <div className="boton">
                        <button onClick={handleCrearTarea}>Crear</button>
                    </div>
                    <div className="boton">
                    <button onClick={handleCrearTarea}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioCrearTarea;