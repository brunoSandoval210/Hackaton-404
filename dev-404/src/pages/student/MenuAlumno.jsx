import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
const MenuAlumno = () => {
    const [salas, setSalas] = useState([]);
    const navigate = useNavigate();
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

    // const handleJoinRoom = async (userId) => {
    //     try {
    //         // Llamar a la API para unirse a la sala
    //         const response = await joinRoom(userId);

    //         // Si la API responde correctamente, redirigir al menú de la sala
    //         if (response.status === 'success') {
    //             // Redirigir al menú de la sala (puedes usar history.push('/ruta-del-menu'))
    //         } else {
    //             // Manejar el caso en el que la API responda con un error
    //         }
    //     } catch (error) {
    //         // Manejar errores de la llamada a la API
    //     }
    // };

    const unirseASala = () => {
        // Llamada simulada a la API para unirse a la sala
        // Aquí podrías hacer la lógica real de llamada a la API
        // En este caso, simulamos una llamada exitosa
        const apiResponse = { success: true };

        if (apiResponse.success) {
            // Si la llamada es exitosa, redirige al menú de la sala
            navigate('/menu-sala'); // Cambia '/menu-sala' por la ruta real de tu menú de sala
        }
    };
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
                                <p>Alumnos: {sala.currentStudents}/{sala.maxStudents}</p>
                            </div>
                            <button type='button' className='button-sala' onClick={unirseASala}>Unirse</button>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
};

export default MenuAlumno;