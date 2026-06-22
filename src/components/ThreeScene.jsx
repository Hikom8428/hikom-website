import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { MeshStandardMaterial, ACESFilmicToneMapping } from "three";

const AutoRotate = ({ children, speed = 0.25 }) => {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  return <group ref={ref}>{children}</group>;
};

const FloatBob = ({ children, speed = 1.5, intensity = 0.15 }) => {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.position.y = Math.sin(clock.elapsedTime * speed) * intensity;
  });
  return <group ref={ref}>{children}</group>;
};

const ModularOTDoor = React.memo(() => {
  const materials = useMemo(
    () => ({
      frame: new MeshStandardMaterial({
        color: "#2d3748",
        metalness: 0.85,
        roughness: 0.25,
      }),
      panel: new MeshStandardMaterial({
        color: "#f8fafc",
        metalness: 0.2,
        roughness: 0.3,
      }),
      kickplate: new MeshStandardMaterial({
        color: "#e2e8f0",
        metalness: 0.9,
        roughness: 0.15,
      }),
      // Plain transparent standard material instead of MeshPhysicalMaterial's
      // transmission - transmission is one of the most expensive three.js material
      // features (a near-field render pass per object) and relies on an Environment
      // map for its reflections, which has been removed for performance.
      glass: new MeshStandardMaterial({
        color: "#0F2942",
        metalness: 0.3,
        roughness: 0.1,
        transparent: true,
        opacity: 0.85,
      }),
      handle: new MeshStandardMaterial({
        color: "#ffffff",
        metalness: 1.0,
        roughness: 0.1,
      }),
      ledAccent: new MeshStandardMaterial({
        color: "#00B4D8",
        emissive: "#00B4D8",
        emissiveIntensity: 4,
        toneMapped: false,
      }),
    }),
    []
  );

  return (
    <group dispose={null}>
      {/* Outer Door Frame */}
      <mesh position={[0, 0, 0]} material={materials.frame}>
        <boxGeometry args={[2.8, 4.6, 0.2]} />
      </mesh>

      {/* Main Door Panel */}
      <mesh position={[0, 0, 0.05]} material={materials.panel}>
        <boxGeometry args={[2.4, 4.2, 0.15]} />
      </mesh>

      {/* Bottom Metal Kickplate */}
      <mesh position={[0, -1.7, 0.13]} material={materials.kickplate}>
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

      {/* Premium D-Handle (Right Side) - box instead of a 32-segment cylinder, far fewer vertices to transform/rasterize each frame for a detail this small */}
      <group position={[0.9, 0, 0.15]}>
        <mesh position={[0, 0, 0.1]} material={materials.handle}>
          <boxGeometry args={[0.07, 1.2, 0.07]} />
        </mesh>
        <mesh position={[0, 0.55, 0.05]} material={materials.handle}>
          <boxGeometry args={[0.035, 0.035, 0.1]} />
        </mesh>
        <mesh position={[0, -0.55, 0.05]} material={materials.handle}>
          <boxGeometry args={[0.035, 0.035, 0.1]} />
        </mesh>
      </group>

      {/* Emissive LED Strip Indicator (Left Side) */}
      <mesh position={[-0.9, 0, 0.13]} material={materials.ledAccent}>
        <boxGeometry args={[0.04, 2.2, 0.02]} />
      </mesh>
    </group>
  );
});
ModularOTDoor.displayName = "ModularOTDoor";

// frameloop="demand" only re-renders when invalidate() is called, so the continuous
// AutoRotate/FloatBob animations above would otherwise freeze. This calls
// invalidate() on a capped interval instead of every display refresh, keeping the
// motion looking the same while cutting render cycles substantially versus the
// default uncapped "always" loop (e.g. 60-120Hz on most screens).
const FrameLimiter = ({ fps = 30 }) => {
  const { invalidate } = useThree();
  useEffect(() => {
    const id = setInterval(invalidate, 1000 / fps);
    return () => clearInterval(id);
  }, [invalidate, fps]);
  return null;
};

// ThreeScene only ever mounts at >=1024px (Hero.jsx gates it), but a narrow
// laptop/tablet window in that range can still have a weak GPU - antialiasing is
// one of the more expensive parts of the render pass, so skip it below desktop width.
const isNarrowViewport = () => typeof window !== "undefined" && window.innerWidth < 1280;

const ThreeScene = () => {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={1}
        frameloop="demand"
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{
          antialias: !isNarrowViewport(),
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance",
        }}
      >
        <FrameLimiter fps={30} />

        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.5} color="#ffffff" />
        <directionalLight position={[5, 10, 7]} intensity={1.5} color="#ffffff" />

        {/* Single cyan accent light - the second (navy) spotlight was removed: one
            fewer per-pixel lighting pass, and its contribution was barely visible
            against the already-navy page background. */}
        <spotLight position={[-8, 5, 8]} angle={0.5} penumbra={1} intensity={40} color="#00B4D8" distance={25} />

        {/* Smooth Floating Animation Wrapper */}
        <AutoRotate speed={0.25}>
          <FloatBob speed={1.5} intensity={0.15}>
            <ModularOTDoor />
          </FloatBob>
        </AutoRotate>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
