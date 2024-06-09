import React from 'react';
const MenuProfesor = () => {
    return (
        <>
         
         <div className="col-md-9 ms-sm-3 col-lg-11 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>Mis cursos</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
                <select className="form-select">
                    <option>2024 - Ciclo 1 Marzo PREG (001) (Actual)</option>
                    {/* Más opciones */}
                </select>
            </div>
        </div>
    </div>

    <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src="https://class.utp.edu.pe/static/media/course24%E2%81%847.c43c482e.png" className="card-img-top" alt="Curso 1" />
                <div className="card-body">
                    <h5 className="card-title">Conoce Utp+class Marzo 2024</h5>
                    <p className="card-text">30019 - Virtual 24/7</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                        <small className="text-muted">25%</small>
                    </div>
                </div>
            </div>
            
        </div>
        
</div>

 



        </>
    );
};

export default MenuProfesor;