import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import { HackerRoom } from '../components/HackerRoom';
import { useControls } from 'leva';

const Hero = () => {
	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scale } = useControls({
		positionX: { value: 2.5, min: -10, max: 10 },
		positionY: { value: 2.5, min: -10, max: 10 },
		positionZ: { value: 2.5, min: -10, max: 10 },
		rotationX: { value: 0, min: -10, max: 10 },
		rotationY: { value: 0, min: -10, max: 10 },
		rotationZ: { value: 0, min: -10, max: 10 },
		scale: { value: 1, min: 0.1, max: 10 },
	});

	return (
		<section className="relative h-screen w-full">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Hi, I am Sahil <span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">Building Products & Brands</p>
			</div>
			<div className='w-full h-full absolute inset-0'>
				<Canvas className='w-full h-full'>
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<HackerRoom
							scale={[scale, scale, scale]}
							position={[positionX, positionY, positionZ]}
							rotation={[rotationX, rotationY, rotationZ]}
						/>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Hero;