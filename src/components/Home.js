import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry attatch="geometry" />
          <meshLambertMaterial attatch="material" color="orange" />
        </mesh>
      </Canvas>
      <Skeleton />
    </>
  );
};

export default Home;
