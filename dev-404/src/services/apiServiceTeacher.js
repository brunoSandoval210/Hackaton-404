const API_BASE_URL = 'http://localhost:3001';

const fetchCursos_profesor = async (id_profesor) => {
    const response = await fetch(`${API_BASE_URL}/api/courses/get_courses_by_teacher/${id_profesor}`);
    if (!response.ok) {
        throw new Error('No se pudo obtener la lista de cursos');
    }
    return await response.json();
};

const fetchSalas = async (id_curso) => {
    const response = await fetch(`${API_BASE_URL}/api/rooms/${id_curso}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

const fetchAlumnos = async (id_sala) => {
    const response = await fetch(`${API_BASE_URL}/api/students/${id_sala}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export { fetchCursos_profesor, fetchSalas, fetchAlumnos };
