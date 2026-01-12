"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Stars, Float } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

function FloatingClouds() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle floating / breathing motion for the whole sky
            groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Bottom Smoke - Left */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
                <Cloud position={[-12, -6, -15]} speed={0.1} opacity={0.3} segments={20} bounds={[10, 2, 2]} />
            </Float>

            {/* Bottom Smoke - Center (Behind Text) */}
            <Float speed={1} rotationIntensity={0.1} floatIntensity={1.5}>
                <Cloud position={[0, -7, -15]} speed={0.1} opacity={0.25} segments={20} bounds={[12, 2, 2]} />
            </Float>

            {/* Bottom Smoke - Right */}
            <Float speed={1.8} rotationIntensity={0.2} floatIntensity={1}>
                <Cloud position={[12, -6, -15]} speed={0.1} opacity={0.3} segments={20} bounds={[10, 2, 2]} />
            </Float>
        </group>
    );
}

const HeroSceneComponent = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }} style={{ pointerEvents: 'none' }}>
                <fog attach="fog" args={['#ffffff', 5, 40]} />
                <ambientLight intensity={0.5} />

                {/* Restored Mist/Smoke */}
                <FloatingClouds />
            </Canvas>
        </div>
    );
};

export const HeroScene = React.memo(HeroSceneComponent);
