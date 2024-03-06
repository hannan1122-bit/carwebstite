/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 jeep.gltf 
Author: David_Holiday (https://sketchfab.com/David_Holiday)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/jeep-grand-cherokee-trackhawk-f8024595e11c48119877c9c7cc554abc
Title: Jeep Grand Cherokee Trackhawk
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Jeep(props) {
  const { nodes, materials } = useGLTF('/JEEPFOLDER/jeep.gltf')
  const jeepRef = useRef();
  useFrame(()=>{
    
    if(jeepRef.current){
      jeepRef.current.rotation.y += 0.01
      if(jeepRef.current.position.y>=1)
      jeepRef.current.position.y -=0.1
    }
  })
  return (
    <group {...props} dispose={null} ref={jeepRef} position={[0,4,0]} >
      <group position={[0, 0.172, -0.087]} rotation={[-Math.PI, 0, 0]} >
        <mesh geometry={nodes.Object_2.geometry} material={materials.Body} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Clignotant} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Dessous} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Disk} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Feux_blanc} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Feux_chrome_text} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Feux_r_tro} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Feux_red_reflect} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Feux_rouge} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Feux_stop} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Frein} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Grille} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Grille_2} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Grille_3} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Interieur_carbone} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Interieur_ceinture} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Interieur_gps} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Interieur_grille_HP} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Interieur_gris_texture} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Interieur_speed} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Interieur_texture} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Interieur_texture_2} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Interieur_texture_3} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Jante_alu} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Jante_noir} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Logo} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Metal_alu} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Miroir} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Motor} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Partie_noir} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.Phare} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Phare_LED} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Phare_noir} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Phare_optique} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Phare_vitre} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Plastique_gris} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.Plastique_noir} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Plastique_red} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.Pneus} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Pneus} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Vitre} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.Vitre_ar} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.Vitre_noir} />
      </group>
    </group>
  )
}

useGLTF.preload('/jeep.gltf')
