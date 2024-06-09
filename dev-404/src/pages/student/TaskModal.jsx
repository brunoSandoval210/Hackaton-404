import React from 'react';


const TaskModal = ({ task, onClose }) => {
    return (
        <div className='modal-task'>
            <div className='modal-content-task'>
                <span className='close' onClick={onClose}>&times;</span>
                <h2>{task.title}</h2>
                <p>Descripcion</p>
                <p className='description-content'>{task.description}</p>
            </div>
        </div>
    );
};

export default TaskModal;