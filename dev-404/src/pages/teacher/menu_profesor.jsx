import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCursos_profesor } from './../../services/apiServiceTeacher.js';

const MenuProfesor = () => {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const id_profesor = 1;
        const getCursos = async () => {
            try {
                const response = await fetchCursos_profesor(id_profesor);
                console.log(response);
                if (response.error) {
                    throw new Error('Error al obtener los cursos');
                }
                setCursos(response.body); // Aquí estableces los cursos en el estado
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getCursos();
    }, []);

    const groupedCursos = cursos.reduce((acc, curso, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(curso);
        return acc;
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Puedes mostrar un loader mientras los datos se cargan
    }

    if (error) {
        return <div>Error: {error}</div>; // Muestra el error si hay problemas con la API
    }
    const handleCursoClick = (curso) => {
        navigate('/menu_salas_profesor', { state: { curso } });
    };

    return (
        <div className="container-menu-profesor">
            <div className="header">
                <h2>Mis cursos</h2>
                <div className="toolbar">
                    <select>
                        <option>2024 - Ciclo 1 Marzo PREG (001) (Actual)</option>
                        {/* Más opciones */}
                    </select>
                </div>
            </div>

            {groupedCursos.map((group, groupIndex) => (
                <div key={groupIndex} className="cardd-group-container">
                    <div className="cardd-group">
                        {group.map(curso => (
                            <div key={curso.id} className="cardd" onClick={() => handleCursoClick(curso)}>
                                <div className="cardd-img-top">
                                    <img src={curso.img} />
                                </div>
                                <div className="cardd-body">
                                    <h5 className="cardd-title">{curso.nombre_curso}</h5>
                                    <p className="cardd-text">{curso.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuProfesor;

