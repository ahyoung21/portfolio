import React from 'react';
import styled from 'styled-components';

const Modal = ({ modalData, handleCloseModal }) => {
  return (
    <>
      <ModalWrap>
        <Dimmed onClick={handleCloseModal} />
        <Inner>
          <h2>{modalData.title}</h2>
          <dl>
            <dt>PROJECT 소개</dt>
            <dd>{modalData.desc}</dd>
            {modalData.detail &&
              modalData.detail.map((item, idx) => {
                return (
                  <div key={idx}>
                    <dt>{item.title}</dt>
                    <dd>{item.item}</dd>
                  </div>
                );
              })}
            {modalData.url && (
              <>
                <dt>접근 가능한 URL</dt>
                <dd>
                  <a href={modalData.url} target="_blank">
                    {modalData.url}
                  </a>
                </dd>
              </>
            )}
          </dl>
          <Desc>
            <div>
              <span>✅ 프로젝트 유형 : </span>
              {modalData.type}
            </div>
            <div>
              <span>✅ 투입인원 : </span>
              {modalData.member}
            </div>
            <div>
              <span>✅ 크로스 브라우징</span>
              <ul>
                <li>PC : {modalData.crossPC}</li>
                <li>MOBILE : {modalData.crossM}</li>
              </ul>
            </div>
            <div>
              <span>✅ 스킬 및 사용툴 : </span>
              {modalData.keyword}
            </div>
          </Desc>
        </Inner>
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
  width: 70rem;
  height: 70rem;
  padding: 4rem;
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  overflow-y: auto;

  h2 {
    padding: 2rem 0 1rem;
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
  }

  dl {
    dt {
      margin-top: 3rem;
      padding-bottom: 1rem;
      font-weight: 500;
      font-size: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    dd {
      margin-top: 1rem;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: keep-all;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    height: 70%;
    padding: 5rem;
    background-color: #fff;
    border-radius: 2rem;

    h2 {
      font-size: 4rem;
    }

    dl {
      dt {
        margin-top: 5rem;
        font-size: 2.6rem;
      }

      dd {
        margin-top: 2rem;
        font-size: 2.4rem;
      }
    }
  }
`;

const Desc = styled.div`
  margin-top: 4rem;

  div {
    font-size: 1.5rem;
    line-height: 1.3;

    & + div {
      margin-top: 1rem;
    }
  }

  span {
    font-weight: 500;
  }

  ul {
    li {
      position: relative;
      margin-top: 1rem;
      padding-left: 3rem;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 2rem;
        width: 0.4rem;
        height: 0.4rem;
        margin-top: -0.2rem;
        border-radius: 50%;
        background-color: #000;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 6rem;

    div {
      font-size: 2.5rem;

      & + div {
        margin-top: 2rem;
      }
    }

    ul {
      li {
        margin-top: 2rem;
        padding-left: 5rem;

        &::before {
          left: 3rem;
          width: 0.8rem;
          height: 0.8rem;
          margin-top: -0.4rem;
        }
      }
    }
  }
`;
