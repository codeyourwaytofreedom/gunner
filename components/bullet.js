import { OrbitControls, RoundedBox, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import a from "../styles/a.module.css";
import Light from "./light.js";

const Bullet = () => {
    return ( 
        <div className={a.test}>
            <Canvas>
                <RoundedBox
                    args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                    radius={0.05} // Radius of the rounded corners. Default is 0.05
                    smoothness={4} // The number of curve segments. Default is 4
                >
                    <meshPhongMaterial color="#f3f3f3" wireframe />
                </RoundedBox>
                <Light clr={"gold"} pos={[3.2,2,2]} />
                <Light clr={"crimson"} pos={[-3.2,2,2]} />
            </Canvas> 
        </div>
     );
}
 
export default Bullet;