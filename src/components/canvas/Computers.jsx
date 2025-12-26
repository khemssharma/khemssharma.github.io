import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Ensure the scene renders once the model finishes loading (fixes first-load blank on some mobiles)
  const { invalidate } = useThree();
  useEffect(() => {
    invalidate();
  }, [computer, invalidate]);

  return (
    <mesh> 
      {/* Make the model visible on darker mobile displays by increasing ambient lighting */}
      <hemisphereLight intensity={isMobile ? 0.35 : 0.15} groundColor='black' />
      <ambientLight intensity={isMobile ? 0.6 : 0.3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isMobile ? 1.25 : 1} />
      <primitive
        object={computer.scene}
        // Reduce scale on mobile so the model fits the viewport
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3.5, -3] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    // Use a wider breakpoint so most phones count as mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    // Use addEventListener if available, otherwise fall back to addListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaQueryChange);
    }

    // Remove the listener when the component is unmounted
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []);

  return (
    <Canvas
      className="w-full h-full"
      frameloop={isMobile ? 'always' : 'demand'}
      shadows={!isMobile}
      dpr={isMobile ? 1 : [1, 2]}
      // Move the camera further back on mobile to show more of the model
      camera={{ position: isMobile ? [20, 2, 10] : [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1.0}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
