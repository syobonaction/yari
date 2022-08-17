import * as THREE from 'three'
import React from 'react'
import { useGLTF, Edges } from "@react-three/drei"
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane001_1: THREE.Mesh
    Plane001_2: THREE.Mesh
    Plane001_3: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../assets/yari.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.002']}>
        <Edges />
      </mesh>
      <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.003']}>
        <Edges />
      </mesh>
      <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.004']}>
        <Edges />
      </mesh>
    </group>
  )
}

useGLTF.preload('../assets/yari.glb')
