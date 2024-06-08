import React, { useState, useEffect } from 'react';

const MenuAlumno = () => {
    const [salas, setSalas] = useState([]);

    useEffect(() => {
        // Aquí realizarías la petición a la API para obtener los datos de las salas
        // Supongamos que la respuesta de la API es un array de objetos con la información de cada sala
        const dataFromApi = [
            { id: 1, name: 'Sala 1', maxStudents: 20, currentStudents: 15 },
            { id: 2, name: 'Sala 2', maxStudents: 20, currentStudents: 18 },
            { id: 3, name: 'Sala 3', maxStudents: 20, currentStudents: 10 },
            { id: 4, name: 'Sala 4', maxStudents: 20, currentStudents: 12 },
            { id: 5, name: 'Sala 5', maxStudents: 20, currentStudents: 19 },
            { id: 6, name: 'Sala 6', maxStudents: 20, currentStudents: 8 },
            { id: 6, name: 'Sala 6', maxStudents: 20, currentStudents: 8 },
        ];
        setSalas(dataFromApi);
    }, []);

    const groupedSalas = salas.reduce((acc, sala, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(sala);
        return acc;
    }, []);

    //Agrupa salas
    return (
        <div className='container-menu-alumno'>
            <h1>Salas</h1>
            <div className='container-salas'>
            {groupedSalas.map((group, groupIndex) => (
                <div key={groupIndex} className='container-salas-row'>
                    {group.map(sala => (
                        <div key={sala.id} className='target-sala'>
                            <div className='content-target'>
                                <h3>{sala.name}</h3>
                                <p>{sala.currentStudents}/{sala.maxStudents}</p>
                            </div>
                            <button type='submit' className='button-sala'>Unirse</button>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
};

export default MenuAlumno;