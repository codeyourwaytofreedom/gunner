import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";


const Box = () => {
    const box = useRef();
    useFrame((state)=>{
        box.current.rotation.y += 0.01 
    })
    return ( 
        <RoundedBox
            args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
            radius={0.05} // Radius of the rounded corners. Default is 0.05
            smoothness={4} // The number of curve segments. Default is 4
            position={[0,0,0]}
            ref={box}
            rotation={[0.4,0,0]}
        >
            <meshPhongMaterial color="#f3f3f3" wireframe />
        </RoundedBox>
     );
}
 
export default Box;