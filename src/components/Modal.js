import React from 'react'
import DataLoading from './Loading/DataLoading';

const Modal = ({modalContent,setModalContent,modalLoading,modalError}) => {

  function handleClick() {
    setModalContent({});
  }

  return (
    <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true" onClick={handleClick}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabel">{modalContent.header}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClick}></button>
          </div>
          <div className="modal-body">
            {modalError && <p className="text-muted-text-center">Não foi possível carregar a resposta</p> }
            {modalLoading && <DataLoading text={"Carregando resposta... "} />}
            {modalContent && modalContent.body}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
