
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Plane } from '@react-three/drei';
import * as THREE from 'three';

// --- TIMELINE BACKGROUND (FLOW OF LIFE) ---
const FlowingRibbon: React.FC<{ color?: string }> = ({ color = "#BCAAA4" }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = -Math.PI / 2 + Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
            meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Plane ref={meshRef} args={[15, 15, 64, 64]} position={[0, -2, -5]} rotation={[-Math.PI/2, 0, 0]}>
             <MeshDistortMaterial 
                color={color} 
                speed={1.5} 
                distort={0.6} // High distortion to make it look like liquid/silk
                roughness={0.6}
                metalness={0.1}
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
             />
        </Plane>
    );
}

export const OrganicAbstractScene: React.FC<{ color?: string }> = ({ color = '#968478' }) => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.6} />
        {/* @ts-ignore */}
        <directionalLight position={[5, 10, 5]} intensity={1} color="#ffffff" />
        
        <FlowingRibbon color={color} />
        
        {/* Subtle fog to blend it */}
        {/* @ts-ignore */}
        <fog attach="fog" args={[color, 5, 20]} /> 
      </Canvas>
    </div>
  );
}
