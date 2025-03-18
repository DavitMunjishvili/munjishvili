"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Group } from "three";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import useWindowResize from "@/lib/use-window-resize";

interface LaptopProps {
  isInteracting: boolean;
}

function Laptop({ isInteracting }: LaptopProps) {
  const { width } = useWindowResize();
  const laptop = useFBX("/laptop/laptop.fbx");

  const laptopRef = useRef<Group>(null);
  const rotationRef = useRef(0);
  const directionRef = useRef(1);

  const { positionY } = useSpring({
    positionY: isInteracting ? 0 : 0.2,
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
    const scaleMap = {
      1536: 0.1,
      1024: 0.09,
      768: 0.07,
      640: 0.05,
    };
    if (width < 640) {
      laptopRef.current!.scale.set(scaleMap[640], scaleMap[640], scaleMap[640]);
    }
    if (width < 768) {
      laptopRef.current!.scale.set(scaleMap[768], scaleMap[768], scaleMap[768]);
    }
    if (width < 1024) {
      laptopRef.current!.scale.set(scaleMap[1024], scaleMap[1024], scaleMap[1024]);
    }
    if (width < 1536) {
      laptopRef.current!.scale.set(scaleMap[1536], scaleMap[1536], scaleMap[1536]);
    }
  }, [width]);

  return (
    <animated.group ref={laptopRef} position-y={positionY}>
      <primitive object={laptop} />
    </animated.group>
  );
}

export default function LaptopViewer() {
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 6, 6], fov: 50 }}
    >
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

      <Environment preset="night" />
    </Canvas>
  );
}
