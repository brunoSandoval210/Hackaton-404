import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuProfesor = () => {
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCursos = async () => {
            const cursosData = [
                { id: 1, title: 'Conoce Utp+class Marzo 2024', description: '30019 - Virtual 24/7', imgSrc: 'https://class.utp.edu.pe/static/media/course24%E2%81%847.c43c482e.png' },
                { id: 2, title: 'Curso 2', description: '30020 - Presencial', imgSrc: 'https://class.utp.edu.pe/static/media/courseP1.6604957d.png' },
                { id: 3, title: 'Curso 3', description: '30021 - Mixto', imgSrc: 'https://class.utp.edu.pe/static/media/course24%E2%81%847.c43c482e.png' },
                { id: 4, title: 'Curso 4', description: '30022 - Virtual', imgSrc: 'https://class.utp.edu.pe/static/media/courseP1.6604957d.png' },
                { id: 5, title: 'Curso 5', description: '30023 - Presencial', imgSrc: 'https://class.utp.edu.pe/static/media/course24%E2%81%847.c43c482e.png' },
                { id: 6, title: 'Curso 6', description: '30024 - Mixto', imgSrc: 'https://class.utp.edu.pe/static/media/courseV1.ec503111.png' },
                { id: 7, title: 'Curso 7', description: '30023 - Presencial', imgSrc: 'https://class.utp.edu.pe/static/media/courseP1.6604957d.png' },
                { id: 8, title: 'Curso 8', description: '30024 - Mixto', imgSrc: 'https://class.utp.edu.pe/static/media/courseV1.ec503111.png' }
            ];
            setCursos(cursosData);
        };

        fetchCursos();
    }, []);

    const groupedCursos = cursos.reduce((acc, curso, index) => {
        const groupIndex = Math.floor(index / 4);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(curso);
        return acc;
    }, []);

    const handleCursoClick = (curso) => {
        navigate('/menu_salas_profesor', { state: { curso } });
    };

    return (
        <div className="container-menu-profesor">
            <div className="miscursos ">
            <div className="miscursos-content">
            <h2>Mis cursos</h2>
            <div className="filter-container">
                <label for="course-filter">Filtrar por</label>
                <select id="course-filter">
                    <option>2024 - Ciclo 1 Marzo PREG (001) (Actual)</option>
                </select>
                
            </div>            
        </div>
        
        
        </div>

        <div class="course">
            <p>2024 - Ciclo 1 Marzo PREG (001) (Actual)</p>
        </div>

        
            {groupedCursos.map((group, groupIndex) => (
                <div key={groupIndex} className="cardd-group-container ">
                    <div className="cardd-group">
                        {group.map(curso => (
                            <div key={curso.id} className="cardd" onClick={() => handleCursoClick(curso)}>
                                <div className="cardd-img-top">
                                    <img src={curso.imgSrc} alt={curso.title} />
                                </div>
                                <div className="cardd-body">
                                    <h5 className="cardd-title">{curso.title}</h5>
                                    <p className="cardd-text">{curso.description}</p>
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
