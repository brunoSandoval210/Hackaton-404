import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuSalas = () => {
    const [salas, setSalas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSalas = async () => {
            const salasData = [
                { id: 1, title: 'Sala 1', description: 'Esta es una descripción breve de la Sala 1.' },
                { id: 2, title: 'Sala 2', description: 'Esta es una descripción breve de la Sala 2.' },
                { id: 3, title: 'Sala 3', description: 'Esta es una descripción breve de la Sala 3.' },

            ];
            setSalas(salasData);
        };

        fetchSalas();
    }, []);

    const handleEnterRoom = (id) => {
        console.log(`Entrar a la sala con id: ${id}`);
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
                            <button className="create-btn" onClick={() => console.log('Mostrar modal para crear salas')}>
                                Crear Salas +
                            </button>
                        </div>
                        
                        {groupedSalas.map((group, groupIndex) => (
                            <div key={groupIndex} className="row">
                                {group.map((sala) => (
                                    <div key={sala.id} className="col">
                                        <div className="room-carddd">
                                            <h2 className="room-title">{sala.title}</h2>
                                            <p className="room-description">{sala.description}</p>
                                            <button className="room-button" onClick={() => handleEnterRoom(sala.id)}>
                                                Entrar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default MenuSalas;
