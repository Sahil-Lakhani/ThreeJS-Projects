import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';
const Hero = () => {

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 z-10">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I am Sahil <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
        </div>
      </div>
      <div className='absolute inset-0'>
        <Canvas className='w-full h-full' >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom scale={0.08} position={[0, -8, 0]} rotation={[0, Math.PI / 2, 0]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;