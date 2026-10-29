
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/final_model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['tripo_node_3deeee18-6cf8-4822-96ba-8942424ccb42'].geometry} material={materials['tripo_material_3deeee18-6cf8-4822-96ba-8942424ccb42']} />
    </group>
  )
}

useGLTF.preload('/final_model.glb')
