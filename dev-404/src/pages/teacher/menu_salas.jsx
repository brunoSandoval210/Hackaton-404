import React from 'react';

const MenuSalas = () => {
    return (
        <>
          <main className="content flex-grow-1 bg-light">
      <header className="header d-flex justify-content-between p-3 border-bottom">
        <div className="header-left">
          {/* Información del usuario */}
        </div>
        <div className="header-right">
          <div className="notifications d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-bell me-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
            <span>9+</span>
          </div>
        </div>
      </header>
      <section className="main-section p-3">
        <div className="chat-section">
          <div className="chat-header d-flex justify-content-between align-items-center mb-3">
            <h2>Salas de Trabajo</h2>
            <button className="create-btn" onClick={() => setShowModal(true)}>
              Crear Salas +
            </button>
          </div>
          <select className="form-select mb-3">
            <option>Todos los mensajes</option>
          </select>
          {/* Mensajes del chat aquí */}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Crear Salas</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <label htmlFor="numSalas" className="col-form-label">Número de salas</label>
                  <div className="col-sm-4">
                    <input
                      type="number"
                      className="form-control"
                      id="numSalas"
                      value={numSalas}
                      onChange={(e) => setNumSalas(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="maxAlumnos" className="col-form-label">Cantidad máx. de alumnos por sala</label>
                  <div className="col-sm-4">
                    <input
                      type="number"
                      className="form-control"
                      id="maxAlumnos"
                      value={maxAlumnos}
                      onChange={(e) => setMaxAlumnos(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    checked={aleatorio}
                    onChange={(e) => setAleatorio(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Elegir aleatoriamente
                  </label>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button className="btn-general" onClick={() => alert('Salas de trabajo creadas')}>
                  Crear Salas de Trabajo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>



        </>
    );
};

export default MenuSalas;