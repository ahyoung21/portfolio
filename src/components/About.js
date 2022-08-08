import React from 'react';
import styled from 'styled-components';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    id: 'JavaScript',
    label: 'JavaScript',
    value: 548,
    color: 'hsl(267, 70%, 50%)',
  },
  {
    id: 'HTML',
    label: 'HTML',
    value: 457,
    color: 'hsl(299, 70%, 50%)',
  },
  {
    id: 'CSS/SCSS',
    label: 'CSS/SCSS',
    value: 594,
    color: 'hsl(237, 70%, 50%)',
  },
  {
    id: 'React',
    label: 'React',
    value: 507,
    color: 'hsl(241, 70%, 50%)',
  },
  {
    id: 'Redux',
    label: 'Redux',
    value: 200,
    color: 'hsl(21, 70%, 50%)',
  },
];
const About = () => {
  return (
    <AboutWrap>
      <Inner>
        <dl>
          <dt>기초가 탄탄한 프론트엔드 개발자</dt>
          <dd>
            퍼블리셔로서 처음 시작을 하여 전체적인 사이트 유지 보수 및 프로모션 작업을 진행하였고,
            전체 사이트 리뉴얼을 진행하면서 시작 단계부터 컴포넌트 구조화 및 주문/결제, 상품상세,
            쿠폰/수강권 및 수강생들의 후기페이지 등 전체적인 사이트 개편 작업을 한 경험이 있습니다.
            <br />
            야나두에서는 메인 상품을 포함한 여러 페이지들을 운영 및 개발하였습니다. 최근에는
            Jquery로 개발되어 있는 기존 야나두 사이트를 걷어내고 새롭게 리액트를 이용하여
            개발하였고, 현재 오픈 후 서비스 중에 있습니다.
          </dd>
          <dt>노력</dt>
          <dd>
            모르는것은 부끄러운게 아니라고 생각합니다. 하지만 모르는것을 알려고 노력하지 않는것은
            부끄러운것이라고 생각합니다. <br />
            때문에 저는 저에게 부족한 것들을 채워나가기 위해 노력합니다. 패스트 캠퍼스에서 김민태의
            프론트엔드 강의, 인프런 한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지 등
            강의를 듣고 이해 안가는 부분은 기술 블로그에서 더 공부한 뒤 토이 프로젝트에 적용해보면서
            공부하고 있습니다. <br />
            또한 리팩토링을 위해 노션에 정리하여 기록하고 있습니다.
            <a
              href="https://lime-textbook-f24.notion.site/008cf379bc51419d8db4aee0c7551b30?v=756594eaa87b495db9403a6ba7c47e98"
              target="_blank"
            >
              Ahyoung Study Note 바로가기
            </a>
            <a
              href="https://lime-textbook-f24.notion.site/c2bcb6f0401f4267847f1b621f7d8c24?v=8a5e89b57d464e66951aed9253ac9eac"
              target="_blank"
            >
              SSAKLOG 토이 프로젝트 바로가기
            </a>
          </dd>
          {/* <dt>앞으로의 마음가짐</dt>
          <dd>
            이 일을 하면서 늘 느끼는 점은 발전이 없다면 개발자로서의 자격이 없다는 생각입니다. 항상
            공부해야 하는 직업적 특성상 저는 늘 발전하고 싶다는 생각을 합니다. 당장 많은 것을 보고
            조급해하며 발전하고자 하지 않고 사소한 것이라도 완벽하게 알고 넘어가는 게 중요하다고
            생각합니다. 기술서적을 읽을 때에 이해가 안 될 때가 많습니다. 발전된 개발자와 제자리에
            머무르는 개발자의 차이는 여기서 발생한다고 생각합니다. 기술서적을 읽었을 때 한 번에
            이해가 되는 개발자는 5%도 안된다고 생각합니다. 처음에는 쭉 읽어보고 이해가 안 되면 두
            번, 세 번, 열 번을 읽어서라도 저의 것으로 만들어야 합니다. 저는 오늘보다 나은 제가 되기
            위해 꾸준히 노력할 것입니다.
          </dd> */}
        </dl>
        <h2>Skill List</h2>
        <IconWork>
          <div className="icon-gear">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="icon-gear">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </IconWork>
        <dl>
          <dt>HTML</dt>
          <dd>
            웹 표준과 웹 접근성을 이해하고 있으며 적절한 HTML 요소를 올바르게 적재적소에 사용하여
            유지보수와 확장성과 SEO를 고려하는 마크업을 지향합니다.
          </dd>
          <dt>CSS / SCSS</dt>
          <dd>
            크로스 브라우징을 고려한 스타일을 작성하여 유지보수에 용이하도록 작업합니다. CSS3을
            이용하여 웹을 디자인합니다. animation, keyframe을 이용한 애니메이션을 구현할 수
            있습니다. CSS Media Query를 이용한 반응형 작업을 할 수 있습니다.
          </dd>
          <dt>JavaScript</dt>
          <dd>
            ES6 문법 사용합니다. 유효성 검사, 네비게이션, 탭 메뉴 등 구현을 하였습니다. 최적화를
            고려하여 중복되는 코드 없이 재사용성을 고려하여 코드를 작성합니다. 또한 각종
            라이브러리를 커스텀하여 사용할 수 있습니다.
          </dd>
          <dt>React</dt>
          <dd>
            React, react-router-dom v6, 생명주기 메서드 컨트롤, 백엔드 및 외부 API 연동, scss,
            styled-components를 이용한 스타일 작업을 하였습니다.
          </dd>
          <dt>Git</dt>
          <dd>
            Git을 활용한 소스코드 버전 관리 및 협업을 할 수 있습니다. Github, Gitlab, AWS 등을
            사용하여 프로젝트 관리 경험이 있습니다.
          </dd>
        </dl>
        <Chart>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 2]],
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: 'ruby',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'c',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'go',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'python',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'scala',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'lisp',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'elixir',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'javascript',
                },
                id: 'lines',
              },
            ]}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]}
          />
        </Chart>
      </Inner>
    </AboutWrap>
  );
};

export default About;

const AboutWrap = styled.div`
  padding: 8rem 0;

  h2 {
    font-weight: 300;
    margin: 5rem 0 3rem;
    text-align: center;
    font-size: 2rem;
  }

  dl {
    dt {
      padding: 4rem 0 2rem;
      font-weight: 300;
      font-size: 2rem;
      color: #3a3a3a;
    }

    dd {
      font-size: 1.6rem;
      font-weight: 500;
      color: #3a3a3a;
      line-height: 1.5;
      letter-spacing: -1px;
      word-break: keep-all;

      a {
        display: block;
        color: #446ab3;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 16rem 0;

    h2 {
      margin: 10rem 0 6rem;
      font-size: 4rem;
    }

    dl {
      dt {
        padding: 6rem 0 4rem;
        font-size: 3rem;
      }

      dd {
        font-size: 2.6rem;
      }
    }
  }
`;

const Inner = styled.div`
  width: 60rem;
  height: 100%;
  margin: auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 0 4rem;
  }
`;

const Chart = styled.div`
  height: 300px;
  margin-top: 5rem;
`;

const IconWork = styled.div`
  position: relative;
  width: 7.5em;
  height: 5em;
  margin: 1em auto;
  font-size: 2.4rem;

  .icon-gear {
    position: absolute;
    top: 0;
    left: 0;
    width: 4em;
    height: 4em;
    background-color: #fbb0b3;
    border-radius: 100%;
    animation: work-effect 3s infinite linear normal;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 1.5em;
      height: 1.5em;
      margin: auto;
      border-radius: 100%;
      background-color: #fff;
      z-index: 2;
    }
    span {
      position: absolute;
      top: -0.3em;
      right: 0;
      left: 0;
      width: 0.6em;
      height: 2.3em;
      margin: auto;
      background-color: #fbb0b3;
      transform: rotate(0deg);
      transform-origin: 50% 100%;
      &:nth-child(2) {
        transform: rotate(30deg);
      }
      &:nth-child(3) {
        transform: rotate(60deg);
      }
      &:nth-child(4) {
        transform: rotate(90deg);
      }
      &:nth-child(5) {
        transform: rotate(120deg);
      }
      &:nth-child(6) {
        transform: rotate(150deg);
      }
      &:nth-child(7) {
        transform: rotate(180deg);
      }
      &:nth-child(8) {
        transform: rotate(210deg);
      }
      &:nth-child(9) {
        transform: rotate(240deg);
      }
      &:nth-child(10) {
        transform: rotate(270deg);
      }
      &:nth-child(11) {
        transform: rotate(300deg);
      }
      &:nth-child(12) {
        transform: rotate(330deg);
      }
    }
    & + .icon-gear {
      top: 2em;
      left: 5em;
      font-size: 80%;
      background-color: #b6e7f8;
      animation: work-effect 3s infinite linear reverse;
      span {
        background-color: #b6e7f8;
      }
    }
  }

  @keyframes work-effect {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
