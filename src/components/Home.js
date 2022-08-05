import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stars } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 5);
      const loader = new GLTFLoader();
      scene.background = new THREE.Color('white');
      const light = new THREE.DirectionalLight(0xffff00, 10);
      scene.add(light);

      loader.load('../images/scene.gltf', (object) => {
        scene.add(object.scene);
        renderer.render(scene, camera);
      });
    }
  }, [canvasRef]);
  return (
    <>
      {/* <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry attatch="geometry" />
          <meshLambertMaterial attatch="material" color="orange" />
        </mesh>
        <Stars />
      </Canvas> */}
      <canvas ref={canvasRef} id="canvas" width="300" height="300"></canvas>
      <Skeleton />
    </>
  );
};

export default Home;
