"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { animated, useSpring } from "@react-spring/three";
import { Group } from "three";

function Phone() {
  const url = "/phone/scene.gltf";
  const gltf = useLoader(GLTFLoader, url);
  const phoneRef = useRef<Group>(null);
  const rotationRef = useRef(0);
  const directionRef = useRef(1);

  const { positionY } = useSpring({
    positionY: 0,
    config: { mass: 1, tension: 200, friction: 20 },
    loop: { reverse: true },
  });

  useFrame(() => {
    if (phoneRef.current) {
      rotationRef.current += directionRef.current * 0.005;

      const maxRotation = Math.PI / 4;
      if (rotationRef.current > maxRotation) {
        directionRef.current = -1;
      } else if (rotationRef.current < -maxRotation) {
        directionRef.current = 1;
      }

      phoneRef.current.rotation.y = rotationRef.current;
      phoneRef.current.scale.set(2, 2, 2);
    }
  });

  return (
    <animated.group ref={phoneRef} position-y={positionY}>
      <primitive object={gltf.scene} dispose={null} />
    </animated.group>
  );
}

export default function PhoneViewer() {
  return (
    <Canvas camera={{ position: [-5, 0, 0] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />

      <Suspense fallback={null}>
        <Phone />
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        dampingFactor={0.025}
      />
    </Canvas>
  );
}
