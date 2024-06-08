import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import TeacherLayout from './pages/teacher/teacher_layout'
import MenuProfesor from './pages/teacher/menu_profesor'
import MenuSalas from './pages/teacher/menu_salas'
import StudentLayout from './pages/student/student_layout'

function App() {
  const [role, setRole] = useState('teacher');
  console.log(role)
  return (
    <BrowserRouter>

        {/* <button onClick={() => setRole('teacher')}>Profesor</button>
        <button onClick={() => setRole('student')}>Estudiante</button> */}
      <Routes>
        {/* Rutas para profesores */}
        {role === 'teacher' && (
          <Route path="/*" element={<TeacherLayout />}>
            <Route index element={<MenuProfesor />} />
            <Route path="menu" element={<MenuSalas />} />
          </Route>
        )}

        {/* Rutas para estudiantes */}
        {role === 'student' && (
          <Route path="/*" element={<StudentLayout />}>
            <Route index element={<StudentHome />} />
            {/* Añadir más rutas para estudiantes si es necesario */}
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
