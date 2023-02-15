import { OrbitControls, RoundedBox, SpotLight } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import a from "../styles/a.module.css";
import Light from "./light.js";
import Box from "./box.js";

const Bullet = () => {
    return ( 
        <div className={a.test}>
            <Canvas>
                <group rotation={[-0.1,0,0]}>
                    <Light clr={"silver"} pos={[0,2,2]} />
                </group>
                <Box/>
            </Canvas> 

            <Canvas>
                <group rotation={[-0.1,0,0]}>
                    <Light clr={"gold"} pos={[0,2,2]} />
                </group>
                <Box/>
            </Canvas> 
        </div>
     );
}
 
export default Bullet;