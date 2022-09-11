import React from "react";
import Picture from "../Picture/Picture";
import Display from "../Display/Display";

const Art = () => {
  return (
    <>
      {/* liam portrait */}
      <Picture
        url={"assets/3D/0/scene.gltf"}
        scale={[2.5, 2.5, 2.5]}
        position={[19.3, 7, 0]}
        rotation={[0, -Math.PI, 0]}
        metalness={0}
        roughness={0.9}
      />
      <Display position={[20, 5, 0]} size={[1, 18, 11]} />

      {/* creation of adam */}
      <Picture
        url={"assets/3D/2/scene.gltf"}
        scale={[4, 4, 4]}
        position={[34.7, 12, 12]}
        // rotation={[0, -Math.PI / 2, Math.PI]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        metalness={0}
        roughness={0.3}
      />

      {/* wedding */}
      <Picture
        url={"assets/3D/4/scene.gltf"}
        scale={[2.5, 2.5, 2.5]}
        position={[19.3, 7, 25]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        metalness={0.0}
        roughness={0.3}
      />
      <Display position={[20, 5, 25]} size={[1, 18, 11]} />

      {/* wilson portrait */}
      <Picture
        url={"assets/3D/3/scene.gltf"}
        scale={[2.5, 2.5, 2.5]}
        position={[-19.3, 7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        metalness={0}
        roughness={0.3}
      />
      <Display position={[-20, 5, 0]} size={[1, 18, 11]} />

      {/* old man portrait */}
      <Picture
        url={"assets/3D/1/scene.gltf"}
        scale={[2.5, 2.5, 2.5]}
        position={[-19.3, 7, 25]}
        rotation={[-Math.PI / 2, 0, 0]}
        metalness={0}
        roughness={0.3}
      />
      <Display position={[-20, 5, 25]} size={[1, 18, 11]} />

      {/* girl portrait */}
      <Picture
        url={"assets/3D/5/scene.gltf"}
        scale={[6.5, 6.5, 6.5]}
        position={[-34.6, 10, 12]}
        rotation={[-Math.PI / 2, 0, 0]}
        metalness={0}
        roughness={0.3}
      />
    </>
  );
};

export default Art;
