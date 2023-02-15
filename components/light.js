import {SpotLight } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from "react";
import { Vector3 } from 'three';


const Light = ({clr,pos }) => {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    const vec = new Vector3();
/*     useFrame((state) => {
        light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
        light.current.target.updateMatrixWorld()
    }) */
    return ( 
        <>
        <SpotLight position={pos} ref={light} color={clr} castShadowpenumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={4}/>
        </>
      );
}
 
export default Light;