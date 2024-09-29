import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, MeshReflectorMaterial, Environment, OrbitControls } from '@react-three/drei'

function Cube() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <Box ref={meshRef} args={[2, 2, 2]}>
      <MeshReflectorMaterial
        color="#888888"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1}
      />
    </Box>
  )
}

const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-black-100">
      <div className="text-center">
        <h1 className="hero_tag mb-8 text-white">
          Welcome to My <span className="text-gray_gradient">3D Portfolio</span>
        </h1>
        <div className="w-64 h-64 mx-auto">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight
              position={[-10, 10, 10]}
              angle={0.3}
              penumbra={1}
              intensity={1}
              castShadow
            />
            <Cube />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero