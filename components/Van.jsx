"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 van.gltf 
Author: jesseroberts (https://sketchfab.com/jesseroberts)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vw-van-718f8f0185bb4ce1b34242796b19418c
Title: VW Van
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Van(props) {
  const { nodes, materials } = useGLTF('/van/van.gltf')
  const vanRef=useRef();
  useFrame(()=>{
    if(vanRef.current)
    vanRef.current.rotation.y+=0.015;
  if(vanRef.current.position.y>0)
  vanRef.current.position.y-=0.1;
  })
  return (
    <group {...props} ref={vanRef} position={[0,4,0]} dispose={null}>
      <group position={[0, 0.926, 0]} rotation={[0, -0.031, 0]}>
        <group position={[-1.655, -1.899, -3.423]} rotation={[0.059, 0.117, -0.002]} scale={1.254}>
          <mesh geometry={nodes.polySurface245_headlight_0.geometry} material={materials.headlight} />
          <mesh geometry={nodes.polySurface246_Metal_0.geometry} material={materials.Metal} />
          <mesh geometry={nodes.polySurface247_headlight_0.geometry} material={materials.headlight} />
          <mesh geometry={nodes.polySurface248_Metal_0.geometry} material={materials.Metal} />
        </group>
        <group position={[1.043, 1.244, 4.498]} rotation={[0.017, 0.19, -0.025]} scale={0.658}>
          <mesh geometry={nodes.polySurface249_yellow_light_0.geometry} material={materials.yellow_light} />
          <mesh geometry={nodes.polySurface250_Metal_0.geometry} material={materials.Metal} />
          <mesh geometry={nodes.polySurface251_yellow_light_0.geometry} material={materials.yellow_light} />
          <mesh geometry={nodes.polySurface252_Metal_0.geometry} material={materials.Metal} />
        </group>
        <group position={[0.378, -2.326, 0.662]} rotation={[-0.136, 0.031, 0.004]}>
          <group position={[5.589, 6.413, 12.373]} rotation={[-1.361, 0, 0.177]} scale={[0.372, 0.06, 0.372]}>
            <mesh geometry={nodes.Mirror_window_0.geometry} material={materials.window} />
            <mesh geometry={nodes.Mirror_Metal_0.geometry} material={materials.Metal} />
          </group>
          <mesh geometry={nodes.Arm_Metal_0.geometry} material={materials.Metal} position={[0, 0.026, 0.004]} />
          <mesh geometry={nodes.Attachment_Metal_0.geometry} material={materials.Metal} position={[-0.8, -1.889, -10.032]} scale={[1.141, 1.337, 1.803]} />
          <mesh geometry={nodes.Piece_Metal_0.geometry} material={materials.Metal} position={[6.142, -2.701, -13.436]} rotation={[-0.024, -0.296, 0.023]} scale={[1.299, 1.299, 2.018]} />
        </group>
        <group position={[0.9, -1.099, -0.028]} rotation={[0, 0.031, 0]}>
          <mesh geometry={nodes.Wiper6_Metal_0.geometry} material={materials.Metal} position={[-0.9, 0.173, 0]} />
          <mesh geometry={nodes.Wiper4_Metal_0.geometry} material={materials.Metal} position={[-0.9, 0.173, 0]} />
        </group>
        <group position={[0.492, -1.593, -0.013]} rotation={[0.049, 0.067, -0.002]}>
          <mesh geometry={nodes.Light_blinn4_0.geometry} material={materials.blinn4} />
          <mesh geometry={nodes.Light_Trim_Metal_0.geometry} material={materials.Metal} />
        </group>
        <group position={[0.477, -0.355, 0.054]} rotation={[0, 0.031, 0]}>
          <mesh geometry={nodes.Logo_Metal_0_1.geometry} material={materials.Metal} />
          <mesh geometry={nodes.polySurface241_tire_0.geometry} material={materials.tire} />
          <mesh geometry={nodes.polySurface241_White_0.geometry} material={materials.White} />
          <mesh geometry={nodes.polySurface242_tire_0.geometry} material={materials.tire} />
          <mesh geometry={nodes.polySurface242_White_0.geometry} material={materials.White} />
          <mesh geometry={nodes.Hubcap_Metal_0.geometry} material={materials.Metal} />
        </group>
        <group position={[-0.035, -0.355, -16.492]} rotation={[0, 0.031, 0]}>
          <mesh geometry={nodes.Logo_Metal_0_2.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Hubcap_Metal_0_1.geometry} material={materials.Metal} />
          <mesh geometry={nodes.polySurface243_tire_0.geometry} material={materials.tire} />
          <mesh geometry={nodes.polySurface243_White_0.geometry} material={materials.White} />
          <mesh geometry={nodes.polySurface244_tire_0.geometry} material={materials.tire} />
          <mesh geometry={nodes.polySurface244_White_0.geometry} material={materials.White} />
        </group>
        <group position={[0, -0.926, 0]} rotation={[0, 0.031, 0]}>
          <mesh geometry={nodes.polySurface187_White_0.geometry} material={materials.White} position={[0.727, -0.275, 0]} rotation={[0, -0.031, 0]} />
          <mesh geometry={nodes.polySurface186_White_0.geometry} material={materials.White} position={[-1.178, -0.467, -1.293]} rotation={[0, 0.16, 0]} scale={1.128} />
          <mesh geometry={nodes.polySurface185_White_0.geometry} material={materials.White} position={[1.835, -0.479, 0]} rotation={[0, -0.031, 0]} />
        </group>
        <group position={[0, -0.926, 0]} rotation={[0, 0.031, 0]}>
          <mesh geometry={nodes.polySurface236_White_0.geometry} material={materials.White} position={[0.065, -0.34, 1.928]} rotation={[-Math.PI, 0.338, -Math.PI]} scale={1.128} />
          <mesh geometry={nodes.polySurface190_White_0.geometry} material={materials.White} position={[0, -0.644, -0.237]} rotation={[0, -0.031, 0]} />
          <mesh geometry={nodes.polySurface188_White_0.geometry} material={materials.White} position={[0, -0.444, -0.42]} rotation={[0, -0.031, 0]} />
        </group>
        <group position={[0, -0.926, 0]} rotation={[0, 0.031, 0]}>
          <mesh geometry={nodes.pPlane40_window_0.geometry} material={materials.window} position={[19.072, 5.878, -15.161]} rotation={[3.001, 1.564, -3.073]} scale={[1, 1, 2.098]} />
          <mesh geometry={nodes.pPlane38_window_0.geometry} material={materials.window} position={[6.8, 6.123, 0]} rotation={[0, 0, -0.024]} />
          <mesh geometry={nodes.pPlane34_window_0.geometry} material={materials.window} position={[6.787, 6.174, 0]} />
          <mesh geometry={nodes.pPlane36_window_0.geometry} material={materials.window} position={[6.787, 6.174, 0]} />
          <mesh geometry={nodes.pPlane32_window_0.geometry} material={materials.window} position={[6.76, 6.136, 3.811]} rotation={[0, 0, -0.018]} />
          <mesh geometry={nodes.pPlane41_window_0.geometry} material={materials.window} position={[1.925, 7.002, 14.691]} rotation={[-0.095, -1.386, 0.252]} />
          <mesh geometry={nodes.pPlane30_window_0.geometry} material={materials.window} position={[6.866, 5.944, 9.212]} rotation={[0, 0, -0.018]} />
          <mesh geometry={nodes.pPlane31_window_0.geometry} material={materials.window} position={[6.866, 5.944, 9.212]} rotation={[0, 0, -0.018]} />
          <mesh geometry={nodes.pPlane33_window_0.geometry} material={materials.window} position={[6.76, 6.136, 3.811]} rotation={[0, 0, -0.018]} />
          <mesh geometry={nodes.pPlane35_window_0.geometry} material={materials.window} position={[6.787, 6.174, 0]} />
          <mesh geometry={nodes.pPlane37_window_0.geometry} material={materials.window} position={[6.787, 6.174, 0]} />
          <mesh geometry={nodes.pPlane39_window_0.geometry} material={materials.window} position={[6.8, 6.123, 0]} rotation={[0, 0, -0.024]} />
          <mesh geometry={nodes.pPlane42_window_0.geometry} material={materials.window} position={[1.925, 7.002, 14.691]} rotation={[-0.095, -1.386, 0.252]} />
        </group>
        <group position={[0.396, -0.926, -0.012]} rotation={[0, 0.031, 0]}>
          <mesh geometry={nodes.Body_Top_White_0.geometry} material={materials.White} />
          <mesh geometry={nodes.Body_Top_Metal_0.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Body_Top_tire_0.geometry} material={materials.tire} />
          <mesh geometry={nodes.Body_Bottom_Body_Bottom1_0.geometry} material={materials.Body_Bottom1} />
        </group>
        <mesh geometry={nodes.Vent_Body_Bottom1_0.geometry} material={materials.Body_Bottom1} position={[0.396, -0.926, -0.012]} rotation={[0, 0.031, 0]} />
        <mesh geometry={nodes.Front_Window_Metal_0.geometry} material={materials.Metal} position={[1.618, -2.854, -0.083]} rotation={[-0.157, -0.007, 0.106]} scale={[1, 1.116, 1]} />
        <mesh geometry={nodes.Logo_Metal_0.geometry} material={materials.Metal} position={[0.412, 3.226, 13.323]} rotation={[1.352, 0.007, -0.055]} scale={1.192} />
        <mesh geometry={nodes.Trim_Metal_0.geometry} material={materials.Metal} position={[0.482, -2.325, -12.72]} rotation={[0, 0, 0.117]} scale={1.929} />
        <mesh geometry={nodes.Bottom_Trim_Metal_0.geometry} material={materials.Metal} position={[0.373, -6.715, -12.72]} rotation={[0, 0, 0.117]} scale={[1.929, 1.543, 1.929]} />
        <mesh geometry={nodes.Handle_Metal_0.geometry} material={materials.Metal} position={[1.507, -1.413, -2.839]} rotation={[0, 0, 0.161]} scale={[1, 1, 1.267]} />
        <mesh geometry={nodes.Back_Handle_Metal_0.geometry} material={materials.Metal} position={[1.085, -1.117, -5.144]} rotation={[0, 0, 0.103]} scale={[1, 1, 0.971]} />
        <mesh geometry={nodes.Part_Metal_0.geometry} material={materials.Metal} position={[5.258, 3.739, 1.358]} rotation={[0, 0.031, -1.579]} scale={0.09} />
        <mesh geometry={nodes.Part2_Metal_0.geometry} material={materials.Metal} position={[5.39, 3.669, 5.631]} rotation={[0, 0.031, -1.579]} scale={0.09} />
        <mesh geometry={nodes.Bottom_tire_0.geometry} material={materials.tire} position={[0, 11.794, 0]} rotation={[0, 0.031, 0]} scale={[1, 1, 1.791]} />
      </group>
    </group>
  )
}

useGLTF.preload('/van.gltf')
