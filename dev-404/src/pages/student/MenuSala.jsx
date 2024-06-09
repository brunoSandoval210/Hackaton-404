import React, { useState, useEffect } from 'react';
import TaskModal from './TaskModal.jsx';
import { useNavigate } from "react-router-dom";
const mockData = [
    {
      id: 1,
      title: "Tarea 1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      status: "pending"
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      status: "in_progress"
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      status: "done"
    },
    {
      id: 4,
      title: "Tarea 4",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      status: "pending"
    },
    {
      id: 5,
      title: "Tarea 5",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      status: "in_progress"
    }
  ];
const MenuSala = () => {
    const [tasks, setTasks] = useState({
        pending: [],
        in_progress: [],
        done: []
    });
    const navigate = useNavigate();
    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         try {
    //             const response = await fetch('https://api.example.com/tasks');
    //             const data = await response.json();
    //             const pendingTasks = data.filter(task => task.status === 'pending');
    //             const inProgressTasks = data.filter(task => task.status === 'in_progress');
    //             const doneTasks = data.filter(task => task.status === 'done');
    //             setTasks({
    //                 pending: pendingTasks,
    //                 in_progress: inProgressTasks,
    //                 done: doneTasks
    //             });
    //         } catch (error) {
    //             console.error('Error fetching tasks:', error);
    //         }
    //     };

    //     fetchTasks();
    // }, []);
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            // Simula la obtención de datos
            const data = mockData;
            const pendingTasks = data.filter(task => task.status === 'pending');
            const inProgressTasks = data.filter(task => task.status === 'in_progress');
            const doneTasks = data.filter(task => task.status === 'done');
            setTasks({
                pending: pendingTasks,
                in_progress: inProgressTasks,
                done: doneTasks
            });
        };

        fetchTasks();
    }, []);
    return (
        
        <div className='container-menu-sala'>
            <div className='container-backlog'>
                <div className='backlog-colum'>
                    <h2>Pendientes</h2>
                    {tasks.pending.map(task => (
                        <div key={task.id} className='task' onClick={() => {setSelectedTask(task); setShowModal(true);}}>
                            <h3 className='title-task'>{task.title}</h3>
                            {/* <p className='description-task'>descripcion: <span>{task.description}</span></p> */}
                            <div className='container-status-task'>
                                <p>estado: <span className='status-task-pending'>pendiente</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='backlog-colum'>
                    <h2>En proceso</h2>
                    {tasks.in_progress.map(task => (
                        <div key={task.id} className='task'>
                            <h3 className='title-task'>{task.title}</h3>
                            {/* <p className='description-task'>descripcion: <span>{task.description}</span></p> */}
                            <div className='container-status-task'>
                                <p>estado: <span className='status-task-process'>en proceso</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='backlog-colum'>
                    <h2>Hechas</h2>
                    {tasks.done.map(task => (
                        <div key={task.id} className='task'>
                            <h3 className='title-task'>{task.title}</h3>
                            {/* <p className='description-task'>descripcion: <span>{task.description}</span></p> */}
                            <div className='container-status-task'>
                                <p>estado: <span className='status-task-done'>hecho</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                {showModal && <TaskModal task={selectedTask} onClose={() => setShowModal(false)} />}
            </div>
            <div className='container-chat'>
                <h2>Chat</h2>
                <div className='chat'>
                    <div className='message'>
                        <p className='user-name'>Usuario</p>
                        <p className='message-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='message'>
                        <p className='user-name'>Usuario</p>
                        <p className='message-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='message'>
                        <p className='user-name'>Usuario</p>
                        <p className='message-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <form className='form-chat'>
                    <input type='text' placeholder='Escribe un mensaje' />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default MenuSala;


