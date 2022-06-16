import React, { useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'  

function Model3D() {

    const earth = useLoader(GLTFLoader, '/earth/scene.gltf')
    const mars = useLoader(GLTFLoader, '/mars/scene.gltf')


    useEffect(() => {
        earth.scene.scale.set(0.025, 0.025, 0.025);
    }, [earth])

    useFrame(({clock}) => {
        earth.scene.rotation.y = clock.getElapsedTime() * 0.1;
    })
  
    return <primitive object={earth.scene} />
}

export default Model3D
