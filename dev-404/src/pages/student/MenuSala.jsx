import React from 'react';

const MenuSala = () => {
    return (
        <div className='container-menu-sala'>
            <div className='container-backlog'>
                <div className='backlog-colum'>
                    <h2>Pendientes</h2>
                    <div className='task'>
                        <h3 className='tittle-task'>Tarea 1</h3>
                        <p className='description-task'>descipcion: <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae assumenda officiis exercitationem numquam. Inventore vel aut facere magni quisquam nisi.</span></p>
                        <div className='container-status-task'>
                            <p>estado: <span className='status-task-pending'>pendiente</span></p>
                        </div>
                    </div>
                </div>
                <div className='backlog-colum'>
                    <h2>En proceso</h2>
                    <div className='task'>
                        <h3 className='tittle-task'>Tarea 1</h3>
                        <p className='description-task'>descipcion: <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae assumenda officiis exercitationem numquam. Inventore vel aut facere magni quisquam nisi.</span></p>
                        <div className='container-status-task'>
                            <p>estado: <span className='status-task-process'>pendiente</span></p>
                        </div>
                    </div>
                </div>
                <div className='backlog-colum'>
                    <h2>En proceso</h2>
                    <div className='task'>
                        <h3 className='tittle-task'>Tarea 1</h3>
                        <p className='description-task'>descipcion: <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae assumenda officiis exercitationem numquam. Inventore vel aut facere magni quisquam nisi.</span></p>
                        <div className='container-status-task'>
                            <p>estado: <span className='status-task-done'>pendiente</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-chat'>

            </div>
        </div>
    );
};

export default MenuSala;