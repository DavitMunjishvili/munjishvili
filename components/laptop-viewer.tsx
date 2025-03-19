"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import useWindowResize from "@/lib/use-window-resize";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface LaptopProps {
  isInteracting: boolean;
}

function Laptop({ isInteracting }: LaptopProps) {
  const { width } = useWindowResize();

  const url = "/new-laptop/laptop.gltf";
  const gltf = useLoader(GLTFLoader, url);

  const laptopRef = useRef<Group>(null);
  const rotationRef = useRef(0);
  const directionRef = useRef(1);

  const { positionY } = useSpring({
    positionY: isInteracting ? -0.2 : 0,
    config: { mass: 1, tension: 100, friction: 10 },
    loop: { reverse: true },
  });

  useFrame(() => {
    if (!isInteracting && laptopRef.current) {
      rotationRef.current += directionRef.current * 0.00025;

      const maxRotation = 0.1745;
      if (rotationRef.current > maxRotation) {
        directionRef.current = -1;
      } else if (rotationRef.current < 0 - maxRotation) {
        directionRef.current = 1;
      }

      laptopRef.current.rotation.y = rotationRef.current;
    }
  });

  useEffect(() => {
    if (!laptopRef.current) return;
    const scaleMap = {
      640: 10.5,
      768: 10.7,
      1024: 10.9,
      1536: 11.1,
      default: 11.5,
    };
    if (width < 640) {
      laptopRef.current.scale.setScalar(scaleMap[640]);
      return;
    }
    if (width < 768) {
      laptopRef.current.scale.setScalar(scaleMap[768]);
      return;
    }
    if (width < 1024) {
      laptopRef.current.scale.setScalar(scaleMap[1024]);
      return;
    }
    if (width < 1536) {
      laptopRef.current.scale.setScalar(scaleMap[1536]);
      return;
    }
    laptopRef.current.scale.setScalar(scaleMap.default);
  }, [width]);

  return (
    <animated.group ref={laptopRef} position-y={positionY}>
      <primitive object={gltf.scene} />
    </animated.group>
  );
}

export default function LaptopViewer() {
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  return (
    <Canvas shadows camera={{ position: [0, 6, 6], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <Laptop isInteracting={isInteracting} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        dampingFactor={0.025}
        onStart={() => setIsInteracting(true)}
        onEnd={() => setIsInteracting(false)}
      />

      <Environment preset="sunset" />
    </Canvas>
  );
}
