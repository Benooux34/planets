import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import React from 'react'
import Header from "../components/Header"
import Model3D from "../components/Model3D"
import { motion } from "framer-motion"

function test() {
  return (
    <div className="h-screen">
        <Head>
        <title>Freedom | Planets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="#" />
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Teko', sans-serif;
          }
        `}
        </style>
        </Head>
        <Header />

          

            <Canvas camera={{fov: 75, position: [0, 8, 13]}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <Model3D />
            </Canvas>

    </div>
  )
}

export default test