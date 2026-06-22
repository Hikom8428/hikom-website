import React, { useMemo, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { 
  Environment, 
  Float, 
  ContactShadows, 
  Sparkles, 
  OrbitControls, 
  PerspectiveCamera 
} from "@react-three/drei";
import * as THREE from "three";

const ResponsiveCamera = () => {
  const { camera, size } = useThree();
  
  useEffect(() => {
    if (size.width < 768) {
      camera.fov = 55;
      camera.position.z = 9;
    } else {
      camera.fov = 45;
      camera.position.z = 7;
    }
    camera.updateProjectionMatrix();
  }, [size, camera]);

  return <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />;
};

const ModularOTDoor = () => {
  const materials = useMemo(() => ({
    frame: new THREE.MeshStandardMaterial({
      color: "#2d3748",
      metalness: 0.85,
      roughness: 0.25,
    }),
    panel: new THREE.MeshStandardMaterial({
      color: "#f8fafc",
      metalness: 0.2,
      roughness: 0.3,
    }),
    kickplate: new THREE.MeshStandardMaterial({
      color: "#e2e8f0",
      metalness: 0.9,
      roughness: 0.15,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: "#0F2942",
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.95,
      thickness: 0.5,
      ior: 1.5,
      transparent: true,
      opacity: 1,
    }),
    handle: new THREE.MeshStandardMaterial({
      color: "#ffffff",
      metalness: 1.0,
      roughness: 0.1,
    }),
    ledAccent: new THREE.MeshStandardMaterial({
      color: "#00B4D8",
      emissive: "#00B4D8",
      emissiveIntensity: 4,
      toneMapped: false,
    }),
  }), []);

  return (
    <group dispose={null}>
      {/* Outer Door Frame */}
      <mesh position={[0, 0, 0]} material={materials.frame} castShadow receiveShadow>
        <boxGeometry args={[2.8, 4.6, 0.2]} />
      </mesh>

      {/* Main Door Panel */}
      <mesh position={[0, 0, 0.05]} material={materials.panel} castShadow receiveShadow>
        <boxGeometry args={[2.4, 4.2, 0.15]} />
      </mesh>

      {/* Bottom Metal Kickplate */}
      <mesh position={[0, -1.7, 0.13]} material={materials.kickplate} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.8, 0.02]} />
      </mesh>

      {/* Vision Window Panel */}
      <mesh position={[0, 0.8, 0.13]} material={materials.glass}>
        <boxGeometry args={[1.3, 1.3, 0.02]} />
      </mesh>
      
      {/* Window Bezel/Frame */}
      <mesh position={[0, 0.8, 0.14]} material={materials.frame}>
        <boxGeometry args={[1.4, 1.4, 0.01]} />
      </mesh>

      {/* Inner Glass Detail */}
      <mesh position={[0, 0.8, 0.145]} material={materials.glass}>
        <boxGeometry args={[1.25, 1.25, 0.02]} />
      </mesh>

      {/* Premium D-Handle (Right Side) */}
      <group position={[0.9, 0, 0.15]}>
        <mesh position={[0, 0, 0.1]} material={materials.handle} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 1.2, 32]} />
        </mesh>
        <mesh position={[0, 0.55, 0.05]} material={materials.handle} castShadow>
          <boxGeometry args={[0.035, 0.035, 0.1]} />
        </mesh>
        <mesh position={[0, -0.55, 0.05]} material={materials.handle} castShadow>
          <boxGeometry args={[0.035, 0.035, 0.1]} />
        </mesh>
      </group>

      {/* Emissive LED Strip Indicator (Left Side) */}
      <mesh position={[-0.9, 0, 0.13]} material={materials.ledAccent}>
        <boxGeometry args={[0.04, 2.2, 0.02]} />
      </mesh>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        dpr={[1, 2]} // Performance scaling
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance"
        }}
      >
        <ResponsiveCamera />
        
        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.5} color="#ffffff" />
        <directionalLight 
          position={[5, 10, 7]} 
          intensity={1.5} 
          color="#ffffff" 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Premium Cyan & Navy Spotlights */}
        <spotLight 
          position={[-8, 5, 8]} 
          angle={0.5} 
          penumbra={1} 
          intensity={40} 
          color="#00B4D8" 
          distance={25}
          castShadow
        />
        <spotLight 
          position={[8, -5, 8]} 
          angle={0.5} 
          penumbra={1} 
          intensity={25} 
          color="#0F2942" 
          distance={25}
        />

        {/* Studio HDR Environment for metallic/glass reflections */}
        <Environment preset="city" />

        {/* Smooth Floating Animation Wrapper */}
        <Float 
          speed={2.5} 
          rotationIntensity={0.15} 
          floatIntensity={1.5} 
          floatingRange={[-0.15, 0.15]} 
        >
          <ModularOTDoor />
        </Float>

        {/* Cleanroom Atmospheric Sparkles */}
        <Sparkles 
          count={200} 
          scale={10} 
          size={1.8} 
          speed={0.3} 
          opacity={0.4} 
          color="#00B4D8" 
        />

        {/* Premium Soft Ground Shadow */}
        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.65} 
          scale={20} 
          blur={2.5} 
          far={5} 
          color="#0F2942" 
          resolution={512}
        />

        {/* Interactive Constraints & Auto Rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate={true}
          autoRotateSpeed={1.2}
          makeDefault
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;