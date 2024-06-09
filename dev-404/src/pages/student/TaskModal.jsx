import React from 'react';
const TaskModal = ({ task, onClose }) => {
    console.log(task.id);
    return (
        <div className='modal-task'>
            <div className='modal-content-task' style={{ backgroundColor: 'black' }}>
                <span className='close' onClick={onClose}>&times;</span>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
        </div>
    );
};

export default TaskModal;