/* eslint-disable */
import React from 'react'
import { useEffect, useRef, useMemo } from 'react'
// @ts-ignore
import * as THREE from 'three'

export function Transform() {
  const geometry = useRef<THREE.BufferGeometry>(null!)

  const triangleCount = 10
  const verticesPerTriangle = 3
  const verticesCount = triangleCount * verticesPerTriangle
  const coordinatesPerVertex = 3
  const coordinatesCount = verticesCount * coordinatesPerVertex

  const coordinates = useMemo(() => {
    const coordinates = new Float32Array(coordinatesCount)

    for (let i = 0; i < coordinatesCount; i++) {
      coordinates[i] = (Math.random() - 0.5) * 3
    }
    return coordinates
  }, [coordinatesCount])

  // Since it has no dependencies, useEffect will
  // execute exactly once, after the first render.
  useEffect(() => {
    geometry.current.computeVertexNormals()
  }, [])

  return (
    <mesh>
      <bufferGeometry ref={geometry}>
        <bufferAttribute
          attach='attributes-position'
          count={verticesCount}
          itemSize={coordinatesPerVertex}
          array={coordinates}
        />
      </bufferGeometry>
      <meshBasicMaterial color='red' side={THREE.DoubleSide} />
    </mesh>
  )
}
