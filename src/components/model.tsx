import React, { act, useEffect, useRef } from "react";
import {
  useAnimations,
  useGLTF,
  useMotion,
  useScroll,
} from "@react-three/drei";
import { Group } from "three";
import { useFrame, useThree } from "@react-three/fiber";

useGLTF.preload("/abstract_sphere.glb");

export default function Model() {
  const groupRef = useRef<Group>(null);
  const { scene, animations } = useGLTF("/abstract_sphere.glb");

  const { actions } = useAnimations(animations, scene);

  useThree(({ camera }) => {
    camera.position.setZ(32);
  });

  useEffect(() => {
    //@ts-ignore
    actions["Take 001"].play();
    //@ts-ignore
    actions["Take 001"].timeScale = 0.1;

    //@ts-ignore
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}
