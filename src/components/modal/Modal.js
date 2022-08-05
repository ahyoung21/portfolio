import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Modal = ({ modalData, handleCloseModal }) => {
  console.log(modalData);
  return (
    <>
      <ModalWrap>
        <Dimmed onClick={handleCloseModal} />
        <Inner></Inner>
      </ModalWrap>
    </>
  );
};

export default Modal;

const ModalWrap = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
`;

const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50rem;
  height: 70rem;
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
`;
