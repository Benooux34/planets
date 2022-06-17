import React, { useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'  

function Model3D() {

    const gltf = useLoader(GLTFLoader, '/mars/scene.gltf')
  
    return <primitive object={gltf.scene} />
}

export default Model3D
