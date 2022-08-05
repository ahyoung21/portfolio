import React, { useState, useEffect } from 'react';
import ModalPortal from '../ModalPortal';
import Modal from './modal/Modal';
import Data from '../data/portFolio.json';

const PortFolio = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (item) => {
    document.body.classList.add('modal-open');
    setModalData(item);
    setModalStatus(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    setModalStatus(false);
  };

  return (
    <>
      <ul>
        {Data &&
          Data.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => {
                    handleOpenModal(item);
                  }}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
      </ul>
      {modalStatus ? (
        <ModalPortal>
          <Modal modalData={modalData} handleCloseModal={handleCloseModal} />
        </ModalPortal>
      ) : null}
    </>
  );
};

export default PortFolio;
