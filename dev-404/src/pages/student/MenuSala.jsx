import React, { useState, useEffect } from 'react';
import TaskModal from './TaskModal.jsx';
import { useNavigate } from "react-router-dom";
import ModalCrear from './ModalCrear.jsx';
import FormularioCrearTarea from './FormularioCrear.jsx';

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
    const [showCrear, setShowCrear] = useState(false);
    
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
         <div className='container-back-but'>
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
                        <div key={task.id} className='task' onClick={() => {setSelectedTask(task); setShowModal(true);}}>
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
                        <div key={task.id} className='task' onClick={() => {setSelectedTask(task); setShowModal(true);}}>
                            <h3 className='title-task'>{task.title}</h3>
                            {/* <p className='description-task'>descripcion: <span>{task.description}</span></p> */}
                            <div className='container-status-task'>
                                <p>estado: <span className='status-task-done'>hecho</span></p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
            <div className='cont-bot'>
                <button onClick={() => {setShowCrear(true);}}>Crear Tarea</button>
            </div>
            {showCrear && <ModalCrear onClose={() => setShowCrear(false)} />}
        </div>
            
            <div className='container-chat'>
                <div className='userdata'> 
                    <div className='cont-perfil'>
                        <div className="foto-perfil">
                            <img src="src/perfil.png"></img>
                        </div>
                    </div>
                    <div className="cont-nombre">
                        <p>Nombre Nombre 
                        Apellido apellido </p>
                    </div>
                </div>
                
                <div className='chat'>
                    <div className='chat-datos'>
                        <div className='cc-perfil'>
                            <img src="src/perfil.png"></img>
                            
                        </div>
                        <div className="cc-mensaje">
                            <div className='nombre'>
                               Alumno Apellido apellido, hora
                            </div>
                            <div className="mensaje">
                               *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore corporis eius quia ducimus assumenda beatae placeat fugiat quasi quaerat amet, rem quisquam sed veniam officiis quas, odio, porro error.
                               Ducimus dolorum quasi optio officia autem porro in iusto quidem pariatur eum odio asperiores voluptatem veniam alias incidunt, est ratione repellat. Unde repellat aliquam praesentium, corrupti nesciunt laboriosam tempora dolores?
                               Recusandae molestias beatae earum facere quisquam sint magni maiores praesentium delectus dignissimos iusto aliquam error tempora, repellat vel repudiandae, inventore nihil nam! Eveniet voluptas provident velit unde alias eum quas.
                            </div>
                        </div>
                    </div>

                    <div className='chat-datos'>
                        <div className='cc-perfil'>
                            <img src="src/perfil.png"></img>
                            
                        </div>
                        <div className="cc-mensaje">
                            <div className='nombre'>
                               Alumno Apellido apellido, hora
                            </div>
                            <div className="mensaje">
                               *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore corporis eius quia ducimus assumenda beatae placeat fugiat quasi quaerat amet, rem quisquam sed veniam officiis quas, odio, porro error.
                               Ducimus praesentium delectus dignissimos iusto aliquam error tempora, repellat vel repudiandae, inventore nihil nam! Eveniet voluptas provident velit unde alias eum quas.
                            </div>
                        </div>
                    </div>

                    <div className='chat-datos'>
                        <div className='cc-perfil'>
                            <img src="src/perfil.png"></img>
                            
                        </div>
                        <div className="cc-mensaje">
                            <div className='nombre'>
                               Alumno Apellido apellido, hora
                            </div>
                            <div className="mensaje">
                               *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore corporis eius quia ducimus assumenda beatae placeat fugiat quasi quaerat amet, rem quisquam sed veniam officiis quas, odio, porro error.
                               Ducimus doloruissimos iusto aliquam error tempora, repellat vel repudiandae, inventore nihil nam! Eveniet voluptas provident velit unde alias eum quas.
                            </div>
                        </div>
                    </div>

                    <div className='chat-datos-b'>
                        <div className='cc-perfil'>
                            <img src="src/perfil.png"></img>
                            
                        </div>
                        <div className="cc-mensaje">
                            <div className='nombre'>
                               Tú, hora
                            </div>
                            <div className="mensaje">
                               *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore corporis eius quia ducimus assumenda beatae placeat fugiat quasi quaerat amet, rem quisquam sed veniam officiis quas, odio, porro error.
                               praesentium delectus dignissimos iusto aliquam error tempora, repellat vel repudiandae, inventore nihil nam! Eveniet voluptas provident velit unde alias eum quas.
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="cont-envio">
                    <div className="cont-input">
                        <input type='text' placeholder='Escribe un mensaje' />
                        <input type='file'/>
                    </div>
                <div className="cont-boton-env">
                    <form>
                    <button type='submit'>Enviar</button> 
                    </form>
                </div>
                
                </div>
                
            </div>
            
        </div>
        
    );
};

export default MenuSala;


