import React from 'react';
import { useGLTF } from '@react-three/drei';
import modelPath from '../src/assets/social_media_scene.glb';

export function Model(props) {
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <group {...props} dispose={null}>
      
      <group position={[-2.322, 2.688, 0]} scale={0.001}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50.geometry}
            material={materials.twitter_logo}
            scale={[0.938, 2.97, 0.938]}
          />
        </group>
      </group>
      <group position={[0.597, 0.012, 1.229]} scale={[0.314, 0.314, 3.325]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.YouTubeWhite}
          position={[0.065, -0.012, -0.042]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[0.582, -0.128, -0.762]}
        scale={[1, 2.964, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material}
        position={[-1.54, 0.311, -1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material}
        position={[-1.54, 0.311, -0.777]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material}
        position={[-1.54, 0.311, -0.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material}
        position={[-1.536, 0.158, -0.763]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.material}
        position={[-1.536, 0.481, -0.763]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material}
        position={[2.596, 0.311, -1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.material}
        position={[2.596, 0.311, -0.777]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material}
        position={[2.596, 0.311, -0.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.material}
        position={[2.6, 0.158, -0.763]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.material}
        position={[2.6, 0.481, -0.763]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.material}
        position={[2.019, 0.311, -1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.material}
        position={[1.371, 0.311, -1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.material}
        position={[0.672, 0.311, -1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.material}
        position={[-0.02, 0.311, -1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.material}
        position={[-0.805, 0.311, -1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.material}
        position={[2.122, 0.158, -1.229]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.material}
        position={[2.122, 0.481, -1.229]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.material}
        position={[2.122, 0.481, -0.29]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials['Material.006']}
        position={[-0.405, 0.248, 0.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.material}
        position={[-0.93, 0.311, -0.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.material}
        position={[1.614, 0.311, -0.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials.Material}
        position={[0.621, -0.002, 1.107]}
        scale={[1.237, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_57.geometry}
        material={materials.material}
        position={[2.122, 0.156, -0.29]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_59.geometry}
        material={materials.material}
        position={[1.24, -0.17, 0.702]}
        rotation={[0, -1.309, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_61.geometry}
        material={materials['Material.002']}
        position={[0, 2.267, 0.022]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_63.geometry}
        material={materials.material}
        position={[-0.822, 0.606, 0.803]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_65.geometry}
        material={materials.material}
        position={[0.596, 0.341, 0.676]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_67.geometry}
        material={materials.material}
        position={[0.6, 0.217, 0.674]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.219, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_69.geometry}
        material={materials.material}
        position={[0.596, -0.165, 0.676]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_71.geometry}
        material={materials.material_0}
        position={[-0.882, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_73.geometry}
        material={materials.material}
        position={[-0.747, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_75.geometry}
        material={materials.material_0}
        position={[-0.942, 1.625, 0.086]}
        rotation={[-0.001, 1.57, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_77.geometry}
        material={materials.material_0}
        position={[-0.942, 1.63, 0.266]}
        rotation={[0.872, 1.57, 1.571]}
        scale={[1.168, 0.719, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_79.geometry}
        material={materials.material_0}
        position={[0.946, 1.625, 0.086]}
        rotation={[-0.001, 1.57, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_81.geometry}
        material={materials.material_0}
        position={[0.946, 1.63, 0.266]}
        rotation={[0.872, 1.57, 1.571]}
        scale={[1.168, 0.719, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_83.geometry}
        material={materials.material}
        position={[1.601, 1.828, -0.003]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 0.658]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_85.geometry}
        material={materials.material}
        position={[1.658, 1.174, -0.003]}
        scale={[0.592, 0.865, 0.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_87.geometry}
        material={materials.material}
        position={[1.449, 1.653, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_89.geometry}
        material={materials.material}
        position={[1.865, 1.653, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_91.geometry}
        material={materials.material}
        position={[-1.228, 0.083, -0.691]}
        rotation={[0, 0.301, 0]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_93.geometry}
        material={materials.material}
        position={[-1.64, 2.065, -0.563]}
        rotation={[0, 0.301, 0]}
        scale={0.463}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_95.geometry}
        material={materials.material}
        position={[-1.081, 1.727, -0.532]}
        rotation={[0.323, 0.968, -0.483]}
        scale={0.393}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_97.geometry}
        material={materials.material}
        position={[-0.796, 2.111, -0.84]}
        rotation={[0.323, 0.968, -0.483]}
        scale={0.441}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_99.geometry}
        material={materials['Material.004']}
        position={[-1.469, 2.169, -0.999]}
        rotation={[0, 0.301, 0]}
        scale={0.441}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_101.geometry}
        material={materials.material}
        position={[-1.357, 2.513, -0.638]}
        rotation={[0, 0.301, 0]}
        scale={0.441}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_103.geometry}
        material={materials.material}
        position={[-1.762, 2.37, -0.957]}
        rotation={[0, 0.301, 0]}
        scale={0.297}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_105.geometry}
        material={materials.material}
        position={[-2.087, 1.996, -0.533]}
        rotation={[0, 0.301, 0]}
        scale={0.362}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_107.geometry}
        material={materials.material}
        position={[-1.73, 1.734, -0.644]}
        rotation={[0, 0.301, 0]}
        scale={0.295}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_109.geometry}
        material={materials.material}
        position={[2.026, 0.01, -0.942]}
        rotation={[-Math.PI, 1.023, -Math.PI]}
        scale={[0.23, 0.204, 0.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_111.geometry}
        material={materials.material}
        position={[2.145, 1.57, -1.123]}
        rotation={[2.95, 0.326, 2.989]}
        scale={0.393}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_113.geometry}
        material={materials.material}
        position={[1.776, 1.954, -1.324]}
        rotation={[2.95, 0.326, 2.989]}
        scale={0.441}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_115.geometry}
        material={materials.material}
        position={[1.787, 2.012, -0.633]}
        rotation={[-Math.PI, 1.023, -Math.PI]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_117.geometry}
        material={materials.material}
        position={[2.11, 2.009, -0.429]}
        rotation={[-Math.PI, 1.023, -Math.PI]}
        scale={0.343}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_119.geometry}
        material={materials.material}
        position={[2.194, 1.577, -0.467]}
        rotation={[-Math.PI, 1.023, -Math.PI]}
        scale={0.295}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_121.geometry}
        material={materials.material_0}
        position={[-0.611, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_123.geometry}
        material={materials.material}
        position={[-0.476, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_125.geometry}
        material={materials.material_0}
        position={[-0.339, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_127.geometry}
        material={materials.material}
        position={[-0.204, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_129.geometry}
        material={materials.material_0}
        position={[-0.068, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_131.geometry}
        material={materials.material}
        position={[0.067, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_133.geometry}
        material={materials.material_0}
        position={[0.204, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_135.geometry}
        material={materials.material}
        position={[0.339, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_137.geometry}
        material={materials.material_0}
        position={[0.475, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_139.geometry}
        material={materials.material}
        position={[0.61, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_141.geometry}
        material={materials.material_0}
        position={[0.745, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_143.geometry}
        material={materials.material}
        position={[0.88, 1.356, 0.913]}
        scale={[1.032, 1, 1]}
      />
    </group>
  );
}
