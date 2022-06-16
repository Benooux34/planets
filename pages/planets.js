import { Html, OrbitControls, useProgress } from '@react-three/drei'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import Model3D from '../components/Model3D'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'  

function planets() {
  return (
    <div className="h-screen flex items-center bg-black px-10 space-x-5">
        {/* TEST EFFET NEON */}
        <div className="effetneon h-[80%] w-[25%]">
            <div className="text-center pt-5">
                <span className="text-white tracking-widest font-light text-3xl">Terre</span>
            </div>
            <div className="h-[45%]">
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Earth />
                    </Suspense>
                </Canvas>
            </div>
            <div className="text-white p-4"> 
                <p>La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie.</p>
            </div>
            <div className="text-white text-center">
                <button className="effetneon py-2 px-3 text-xl">En Savoir Plus</button>
            </div>
        </div>

        {/* TEST EFFET CLASSIQUE */}
        <div className="h-[80%] w-[25%] border border-white border-2">
            <div className="text-center pt-5">
                <span className="text-white tracking-widest font-light text-3xl">Mars</span>
            </div>
            <div className="h-[45%]">
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Mars />
                    </Suspense>
                </Canvas>
            </div>
            <div className="text-white p-4"> 
                <p>La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie.</p>
            </div>
            <div className="text-white text-center">
                <button className="py-2 px-3 text-xl">En Savoir Plus</button>
            </div>
        </div>
        
    </div>
  )
}

export default planets

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}


function Earth() {

    const earth = useLoader(GLTFLoader, '/earth/scene.gltf')

    useEffect(() => {
        earth.scene.scale.set(0.025, 0.025, 0.025);
    }, [earth])

    useFrame(({clock}) => {
        earth.scene.rotation.y = clock.getElapsedTime() * 0.1;
    })
  
    return <primitive object={earth.scene} />
}

function Mars() {

    const mars = useLoader(GLTFLoader, '/mars/scene.gltf')

    useEffect(() => {
        mars.scene.scale.set(1.8, 1.8, 1.8);
        mars.scene.position.set(-1.8, -1.5, 0)
    }, [mars])

    // useFrame(({clock}) => {
    //     mars.scene.rotation.y = clock.getElapsedTime() * 0.1;
    // })
  
    return <primitive object={mars.scene} />
}