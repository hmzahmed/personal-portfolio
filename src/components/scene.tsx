"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./model";
import { Vector3 } from "three";

const MyScene = () => {
  return (
    <Canvas gl={{ antialias: true }} className="w-full flex items-end">
      <perspectiveCamera position={new Vector3(0, 0, -20)} />
      <ambientLight intensity={2} />
      <directionalLight intensity={2} />
      <Model />
    </Canvas>
  );
};

export default MyScene;
