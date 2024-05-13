"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";

const Model = () => {
  useEffect(() => {
    console.log("HERE");
  }, []);
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};

export default Model;
