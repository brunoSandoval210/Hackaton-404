import React, { useState, useEffect } from 'react';

const MenuProfesor = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        // Simula una llamada a la API para obtener los datos de los cursos
        const fetchCursos = async () => {
            const cursosData = [
                { id: 1, title: 'Conoce Utp+class Marzo 2024', description: '30019 - Virtual 24/7', imgSrc: 'https://class.utp.edu.pe/static/media/course24%E2%81%847.c43c482e.png', progress: '25%' },
                { id: 2, title: 'Curso 2', description: '30020 - Presencial', imgSrc: 'https://via.placeholder.com/150', progress: '50%' },
                { id: 3, title: 'Curso 3', description: '30021 - Mixto', imgSrc: 'https://via.placeholder.com/150', progress: '75%' },
                { id: 4, title: 'Curso 4', description: '30022 - Virtual', imgSrc: 'https://via.placeholder.com/150', progress: '100%' },
                { id: 5, title: 'Curso 5', description: '30023 - Presencial', imgSrc: 'https://via.placeholder.com/150', progress: '20%' },
                { id: 6, title: 'Curso 6', description: '30024 - Mixto', imgSrc: 'https://via.placeholder.com/150', progress: '40%' }
            ];
            setCursos(cursosData);
        };

        fetchCursos();
    }, []);

    const groupedCursos = cursos.reduce((acc, curso, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(curso);
        return acc;
    }, []);

    if (cursos.length === 0) {
        return <div>Loading...</div>; // Puedes mostrar un loader mientras los datos se cargan
    }

    return (
        <>
            <div className="col-md-9 ms-sm-3 col-lg-11 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2>Mis cursos</h2>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <select className="form-select">
                                <option>2024 - Ciclo 1 Marzo PREG (001) (Actual)</option>
                                {/* Más opciones */}
                            </select>
                        </div>
                    </div>
                </div>

                {groupedCursos.map((group, groupIndex) => (
                    <div key={groupIndex} className="row mb-4">
                        {group.map(curso => (
                            <div key={curso.id} className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-img-top shadow-sm">
                                        <img src={curso.imgSrc} alt={`Curso ${curso.id}`} />
                                        <div className="progress-bar">{curso.progress}</div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{curso.title}</h5>
                                        <p className="card-text">{curso.description}</p>
                                        <div className="tutor-info">
                                            <small className="text-muted">{curso.tutor}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MenuProfesor;
