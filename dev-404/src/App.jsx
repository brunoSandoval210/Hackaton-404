import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import TeacherLayout from './pages/teacher/teacher_layout'
import MenuProfesor from './pages/teacher/menu_profesor'
import MenuSalas from './pages/teacher/menu_salas'
import StudentLayout from './pages/student/StudentLayout'
import MenuAlumno from './pages/student/MenuAlumno'
import MenuSala from './pages/student/MenuSala'

function App() {
  const [role, setRole] = useState('student');
  return (
    <BrowserRouter>

        {/* <button onClick={() => setRole('teacher')}>Profesor</button>
        <button onClick={() => setRole('student')}>Estudiante</button> */}
      <Routes>
        {/* Rutas para profesores */}
        {role === 'teacher' && (
          <Route path="/*" element={<TeacherLayout />}>
            <Route index element={<MenuProfesor />} />
            <Route path="menu_salas_profesor" element={<MenuSalas />} />
          </Route>
        )}

        {/* Rutas para estudiantes */}
        {role === 'student' && (
          <Route path="/*" element={<StudentLayout />}>
            <Route index element={<MenuAlumno />} />
            <Route path="menu-sala" element={<MenuSala />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
