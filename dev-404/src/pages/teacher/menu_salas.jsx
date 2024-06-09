import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateSalasModal from './create_salas_modal.jsx';

const MenuSalas = () => {
    const [salas, setSalas] = useState([]);
    const navigate = useNavigate();
    const [modalCrearSala, setmodalCrearSala] = useState([false]); 

    useEffect(() => {
        const fetchSalas = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/rooms/get_salas_by_courses/2');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setSalas(data.body);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchSalas();
    }, []);

    const handleEnterRoom = (sala_id) => {
        console.log(`Entrar a la sala con id: ${sala_id}`);
    };

    if (salas.length === 0) {
        return <div>Loading...</div>;
    }

    const groupedSalas = salas.reduce((acc, sala, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(sala);
        return acc;
    }, []);

    return (
        <>
            <div className="content">
                <section className="main-section">
                    <div className="chat-section">
                        <div className="chat-header">
                            <h2>Salas de Trabajo</h2>
                            <button className="create-btn" onClick={() => {setmodalCrearSala(true)}}>
                                Crear Salas +
                            </button>
                        </div>
                        
                        {groupedSalas.map((group, groupIndex) => (
                            <div key={groupIndex} className="row">
                                {group.map((sala) => (
                                    <div key={sala.sala_id} className="col">
                                        <div className="room-carddd">
                                            <h2 className="room-title">{sala.sala_nombre}</h2>
                                            <p className="room-description">{sala.description}</p>
                                            <span>{sala.numero_participantes}/{sala.max_participantes}</span>
                                            {/* <button className="room-button" onClick={() => handleEnterRoom(sala.sala_id)}>
                                                Entrar
                                            </button> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                {modalCrearSala && <CreateSalasModal onClose={()=> setmodalCrearSala(false)}/>}
            </div>
        </>
    );
};

export default MenuSalas;
