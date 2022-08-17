import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera, Bounds } from "@react-three/drei"
import Yari from '../models/Yari'

export default function World() {
  return (
    <div style={{ height: "550px" }}>
    <Canvas shadows>
      <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={100}/>
        <group rotation={[0.5, -0.8, 0]}>
          <ambientLight intensity={0.3} />
          <pointLight color="white" intensity={1} position={[20, 20, -20]} />
          <Bounds fit observe damping={1} margin={1.2}>
            <Yari shadows />
          </Bounds>
        </group>
    </Canvas>
    </div>
  )
}
