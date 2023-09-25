import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Transform } from './Transform'
// @ts-ignore
import * as THREE from 'three'

type Props = {
  value?: number
}
const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((prev) => prev - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <Canvas
        dpr={1}
        gl={{
          antialias: false,
          outputColorSpace: THREE.LinearSRGBColorSpace,
        }}
        camera={{
          fov: 60,
          near: 0.1,
          far: 200,
          // position: [-1, 2, 0]
        }}
      >
        <Transform />
      </Canvas>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
