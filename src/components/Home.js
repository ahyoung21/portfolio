import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import modelItem from '../images/three/scene.gltf';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const Home = () => {
  useEffect(() => {
    // 장면을 만든다.
    let scene = new THREE.Scene();

    // 브라우저에 내가 만든 장면을 렌더링해주세요.
    // 3d 오브젝트를 브라우저에 보여주고 싶을때는 WebGL이라는 엔진을 사용하는데 그때 도와주는 함수.
    let renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas'),
      antialias: true,
    });
    renderer.outputEncoding = THREE.sRGBEncoding;

    // 카메라 설치
    // PerspectiveCamera (원근법 O)
    // OrthographicCamera (원근법 무시)
    let camera = new THREE.PerspectiveCamera(25, 1);
    camera.position.set(0, 0, 8);

    // 조명 & 배경색
    scene.background = new THREE.Color('white');
    let light = new THREE.DirectionalLight(0x446ab3, 0.8);
    let light2 = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(light);
    scene.add(light2);

    let loader = new GLTFLoader();
    loader.load(modelItem, function (gltf) {
      scene.add(gltf.scene);

      function animate() {
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.015;
        renderer.render(scene, camera);
      }
      animate();
    });
  }, []);
  return (
    <HomeWrap>
      <Inner>
        <p>
          안녕하세요 👋🏻
          <br />
          어제보다 더 나은 프론트엔드 개발자 유아영입니다.
          <br />
          <span>이 사이트는 React</span>로 개발되었으며,
          <br />
          <span>Javascript 와 CSS Keyframe animation, Three.js, nivo </span>등을 사용하여
          구현했습니다.
        </p>
        <div>
          <canvas id="canvas" width="400" height="400"></canvas>
        </div>
      </Inner>
      {/* <Skeleton /> */}
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;

  canvas {
    display: block;
    margin: auto;
  }
`;

const Inner = styled.div`
  width: 60rem;
  margin: auto;

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #3a3a3a;

    span {
      color: #446ab3;
    }
  }
`;
