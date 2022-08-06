import React, { useState } from 'react';
import ModalPortal from '../ModalPortal';
import Modal from './modal/Modal';
import styled from 'styled-components';

import ImgSsaklog from '../images/portfolio/thumb_ssaklog.jpg';
import ImgMega from '../images/portfolio/thumb_mega.jpg';
import ImgPasta from '../images/portfolio/thumb_pasta.jpg';
import ImgSinsago from '../images/portfolio/thumb_sinsago.jpg';
import ImgStoryJam from '../images/portfolio/storyjam.png';
import ImgPartner from '../images/portfolio/thumb_talkpartner.jpg';
import ImgTalk from '../images/portfolio/thumb_talktalk.jpg';
import ImgYobi from '../images/portfolio/thumb_yobi.jpg';
import ImgYnd from '../images/portfolio/img_yanadoo.jpg';
import ImgSpooner from '../images/portfolio/img_spooner.png';
import ImgChat from '../images/portfolio/img_chat.png';

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

  const data = [
    {
      title: '네이버 톡톡',
      keyword: '#SCSS, #Gulp, #JavaScript, #HTML, #CSS3, #git, #Zeplin',
      period: '2018/06/01 ~ 2019/06/01',
      imageURL: ImgTalk,
      desc: '네이버 톡톡이란 사용자가 친구 추가없이, 별도 앱이나 프로그램 설치없이 PC와 모바일에서 바로 대화하는 웹 채팅 서비스입니다.\n모든 브라우저와 모든 모바일기기에서 차별 없이 보여야 하는 채팅서비스이므로 웹 접근성을 고려하여 마크업 하였습니다.\n채팅 서비스인 만큼 말풍선과 유동적인 레이아웃을 고려하여 작업했습니다.\n또한, 많은 사용자들을 위해 크로스 브라우징을 신경써서 마크업을 하였습니다.',
      type: '유지보수',
      member: '3명',
      crossPC: '익스(^8), 크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android ^4.4.2, ios 최신',
    },
    {
      title: '네이버 파트너센터',
      keyword: '#SCSS, #Gulp, #JavaScript, #HTML, #CSS3, #git, #Zeplin, #React',
      period: '2018/06/01 ~ 2019/06/01',
      imageURL: ImgPartner,
      desc: '네이버 톡톡 파트너센터이란 판매자가 고객과 별도의 앱 설치, 친구추가 없이 쉽고 간편하게 실시간으로 상담을 할 수 있는 서비스입니다.\n모든 브라우저와 모든 모바일기기에서 차별 없이 보여야 하는 채팅서비스이므로 웹 접근성을 고려하여 마크업 하였습니다.\n채팅 서비스인 만큼 말풍선과 유동적인 레이아웃을 고려하여 작업했습니다.\n또한, 많은 사용자들을 위해 크로스 브라우징을 신경써서 마크업을 하였습니다.\n2019년 하반기에 React.js 환경에서 회원가입페이지 개편 작업을 진행했습니다.',
      type: '개편',
      member: '3명',
      crossPC: '익스(^8), 크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android ^4.4.2, ios 최신',
    },
    {
      title: '네이버 파스타',
      keyword: '#SCSS, #Gulp, #JavaScript, #HTML, #CSS3, #git, #Zeplin, #Bootstrap',
      period: '2018/06/01 ~ 2018/12/01',
      imageURL: ImgPasta,
      desc: '네이버 파스타란 네이버 내부의 개발자들이 사용하는 사이트로 API 서비스를 제공해줍니다.\n데이터가 들어가는 부분이 많은만큼 부트스트랩을 사용하여 유동적인 레이아웃으로 마크업하였습니다.\n2019년도 하반기에 다국어 서비스가 지원되면서 영어, 중국어(간체, 번체), 일어, 한국어 등 언어가 변환되어도 레이아웃이 틀어지지 않게 개편 작업을 진행했습니다.',
      type: '유지보수',
      member: '1명',
      crossPC: '크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android ^4.4.2, ios 최신',
    },
    {
      title: '네이버 요비',
      keyword: '#SCSS, #Gulp, #JavaScript, #HTML, #CSS3, #git, #Zeplin, #React',
      period: '2018/06/01 ~ 2018/12/01',
      imageURL: ImgYobi,
      desc: '네이버 요비란 소프트웨어 협업 개발 플랫폼입니다.\n쉽게 말해 github같은 소스코드관리를 할 수 있는 서비스입니다.\nReact.js 환경에서 컴포넌트 단위로 마크업 하였습니다.\n컴포넌트 단위로 구성되어있는 만큼 재사용성에 비중을 두어 유동적인 마크업을 구현하였습니다.',
      type: '유지보수',
      member: '1명',
      crossPC: '크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android ^4.4.2, ios 최신',
    },
    {
      title: '좋은책 신사고',
      keyword: '#JavaScript, #HTML, #CSS3',
      period: '2018/06/01 ~ 2019/06/01',
      imageURL: ImgSinsago,
      desc: '좋은책 신사고, 쎈, 스마트쎈 등 사이트 유지보수 및 이벤트 페이지 작업을 진행했습니다.\n이벤트 페이지에서는 CSS3의 애니메이션을 주로 이용하여 작업하였고 그 외 사이트 유지보수에서는 웹 접근성을 고려하여 마크업 하였습니다.',
      type: '유지보수',
      member: '3명',
      crossPC: '익스(^8), 크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android ^4.4.2, ios 최신',
    },
    {
      title: '메가스터디',
      keyword: '#JavaScript, #HTML, #CSS3, #TweenMax',
      period: '2019/10/01 ~ 2020/04/01',
      imageURL: ImgMega,
      desc: '메가스터디학원, 지점별 학원 사이트 유지보수 및 이벤트 페이지를 작업했습니다.\nTweenMax를 사용하여 애니메이션 작업을 하였고, 메일링 코딩, 회원가입 페이지 등 웹접근성을 고려해 마크업 하였습니다.',
      type: '유지보수',
      member: '3명',
      crossPC: '익스(^10), 크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android ^4.4.2, ios 최신',
    },
    {
      title: '스토리잼',
      keyword: '#JavaScript, #HTML, #CSS3, #Gulp, #React',
      period: '2020/04/01 ~ 2020/08/01',
      imageURL: ImgStoryJam,
      desc: '스토리잼은 사용자가 자신의 만화, 소설 등의 창작물을 직접 업로드 및 공유할 수 있고, 동시에 수익도 올릴 수 있는 웹툰, 만화, 웹소설의 오픈 마켓형 플랫폼 서비스입니다.\n모바일 웹을 주로 작업했고, 리액트 환경에서 마크업하였습니다.\n이벤트 페이지에서는 CSS3의 애니메이션을 주로 이용하여 작업하였고 그 외 사이트 유지보수에서는 웹 접근성을 고려하여 마크업 하였습니다.',
      type: '유지보수',
      member: '1명',
      crossPC: '크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android 최신, ios 최신',
    },
    {
      title: '야나두',
      keyword: '#JavaScript, #HTML, #CSS3, #React, #styled-components, #SCSS',
      period: '2020/08/01 ~ ',
      imageURL: ImgYnd,
      desc: '기존 야나두 서비스 프로모션 유지보수 후 2021/05 부터 리액트로 전면 개편하였습니다.\n초기세팅 및 쿠폰, 수강권, 모달 공통 컴포넌트, 주문서, 주문상세, 상품상세 등 서비스에 주축이 되는 부분을 담당하여 처음부터 끝까지 진행하였습니다.\n웹 최적화 , 컴포넌트간의 느슨한 조합을 고려해 개발하였습니다.',
      type: '개편',
      member: '2명',
      crossPC: '크롬, 엣지, 사파리, 파이어폭스, 오페라',
      crossM: 'android 최신, ios 최신',
    },
    {
      title: '싹로그',
      keyword: '#Next.js, #HTML, #CSS3, #styled-components, #TypeScript',
      period: '2022/01/01 ~ ',
      imageURL: ImgSsaklog,
      desc: '블로그 형태의 서비스로 회사 내 스터디 모임을 만들어 개발 진행중입니다.\nnext.js와 typescript를 사용해 만들고 Netilfy를 통해 배포하고있습니다.',
      url: 'https://ssaklog.netlify.app/',
      type: '스터디',
      member: '2명',
      crossPC: '크롬',
      crossM: 'android 최신, ios 최신',
    },
    {
      title: 'Spooner NFT',
      keyword: '#HTML, #CSS3, #JavaScript',
      period: '2022/01/29 ~ 2022/01/30',
      imageURL: ImgSpooner,
      desc: 'nft 안내 사이트 입니다. 그 중에서 저는 카운트 다운 함수 구현, 컨텐츠 영역, 조건에 따른 분기처리 적용을 처리했습니다.',
      url: 'https://sosu1008.github.io/spooner/spoonerNFT/src/index.html',
      type: '퍼블리싱',
      member: '2명',
      crossPC: '크롬',
      crossM: 'android 최신, ios 최신',
      detail: [
        {
          title: '작업범위',
          item: '원페이지 사이트, 6개의 섹션으로 구성.\n메뉴 클릭 시 해당 섹션으로 슬라이드.\n반응형 처리. (1024px 한개의 분기점)\n신청 List에 따라 예상 수익 계산 함수 적용.\n조건에 따른 분기처리 적용.\n그 중에서 저는 카운트 다운 함수 구현, 컨텐츠 영역, 조건에 따른 분기처리 적용을 처리했습니다.',
        },
      ],
    },
    {
      title: 'socket.io 채팅앱',
      keyword: '#HTML, #CSS3, #JavaScript, #React.js, #react-redux, #socket.io, #styled-components',
      period: '2022/07/16 ~ 2022/07/17',
      imageURL: ImgChat,
      desc: 'React + Socket.io + node.js 를 이용한 실시간 채팅 앱입니다.',
      url: 'https://ahyoung21.github.io/list/',
      detail: [
        {
          title: '구현 내용',
          item: 'CRA, 라우터를 사용하여 구현했습니다.\n페이지는 채팅 목록, 채팅방으로 이루어져 있습니다.',
        },
        {
          title: '채팅 목록',
          item: '목록 : ChatList.json 파일에서 목록 데이터를 가져와서 화면에 뿌려줬습니다.\n애니메이션 : CSS keyframe을 사용하여 구현하였습니다.\n시간 표기 : 표시되는 시간의 경우 YYYY-MM-SS HH:MM:SS 로 받아와서 하루를 넘길 경우 DAY로 하루 전일 경우 시간을 표시해 줬습니다.',
        },
        {
          title: '채팅방',
          item: '메시지 전송 시간 : moment 사용. 미국 서버를 사용하여 moment-timezone을 이용하여 아시아 시간으로 변경했습니다.\n메시지 시간 예외 처리 : 한 사람이 1분 동안 메시지를 연속해서 보낸다면 자바스크립트로 조건처리를 하여 구현하였습니다.\n날짜가 바뀌면 구분선 추가 작업은 moment에서 해당 날짜를 가져와서 자바스크립트로 처리하여 구현하였습니다.',
        },
      ],
      type: '스터디',
      member: '1명',
      crossPC: '크롬',
      crossM: 'android 최신, ios 최신',
    },
  ];

  return (
    <PortFolioWrap>
      <ul>
        {data &&
          data.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => {
                    handleOpenModal(item);
                  }}
                  style={{ backgroundImage: `url(${item.imageURL})` }}
                >
                  <p>
                    <strong>{item.title}</strong>
                    <span>{item.keyword}</span>
                    {item.period}
                  </p>
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
    </PortFolioWrap>
  );
};

export default PortFolio;

const PortFolioWrap = styled.div`
  padding: 10rem 0;

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    width: 60rem;
    margin: auto;
    text-align: left;

    li {
      display: inline-block;
      flex: 0 0 48%;
      margin-bottom: 2rem;
      box-sizing: border-box;
      vertical-align: top;

      button {
        display: block;
        width: 100%;
        height: 100%;
        padding-top: 20rem;
        background-position: 50% 0;
        background-size: 70% auto;
        background-repeat: no-repeat;
        box-sizing: border-box;
        border: 1px solid #eee;
        border-radius: 2rem;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          background-size: 80% auto;
        }

        p {
          padding: 2rem;
          font-weight: 500;
          font-size: 1.6rem;
          color: #777;
          background-color: #fff;
          text-align: left;
          box-sizing: border-box;
          border-top: 1px solid #f1f1f1;
          border-bottom-right-radius: 2rem;
          border-bottom-left-radius: 2rem;

          strong {
            display: block;
            padding: 0.3rem 0 0.8rem;
            font-weight: 500;
            font-size: 2rem;
            color: #3a3a3a;
            text-align: left;
          }

          span {
            display: block;
            padding-bottom: 0.3rem;
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 20rem 0;

    ul {
      width: 100%;
      padding: 0 4rem;

      li {
        margin-bottom: 4rem;

        button {
          padding-top: 34vw;
          background-size: 90% auto;

          &:hover {
            background-size: 100% auto;
          }

          p {
            padding: 2rem;
            font-size: 2rem;

            strong {
              font-size: 3rem;
            }

            span {
              padding-bottom: 0.8rem;
            }
          }
        }
      }
    }
  }
`;
