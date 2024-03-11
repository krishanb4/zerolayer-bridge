"use client";
import React from "react";
import { Html } from "@react-three/drei";

export const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500  animate-spin"></div>
      </div>
    </Html>
  );
};
