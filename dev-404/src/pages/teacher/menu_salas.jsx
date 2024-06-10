import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CreateSalasModal from './create_salas_modal.jsx';


const MenuSalas = () => {
    const [salas, setSalas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalCrearSala, setmodalCrearSala] = useState([false]);
    const [salaCreada, setSalaCreada] = useState(false);
    const location = useLocation();
    var id_curso = location.state.id_curso;
    console.log(id_curso)

    useEffect(() => {
        const fetchSalas = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/rooms/get_salas_by_courses/${id_curso}`);
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
    }, [id_curso, salaCreada]);

    const handleEnterRoom = (sala_id) => {
        console.log(`Entrar a la sala con id: ${sala_id}`);
    };

    const handleCloseModal = () => {
        setmodalCrearSala(false);
    };

    const handleSalaCreada = () => {
        setSalaCreada(true);
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

                {modalCrearSala && <CreateSalasModal onClose={handleCloseModal} onCreate={handleSalaCreada} cursoId={id_curso} />} 
            </div>
        </>
    );
};

export default MenuSalas;