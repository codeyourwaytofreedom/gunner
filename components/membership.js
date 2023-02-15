import { OrbitControls, RoundedBox, SpotLight } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import a from "../styles/a.module.css";
import Light from "./light.js";
import Box from "./box.js";
import Package from "./package.js";
const Spotlight = () => {
    return ( 
    <>
        <div className={a.spotlights}>
                <div className={a.all}>
                    <Canvas>
                        <group position={[0,0.3,0]}>
                            <Light clr={"silver"} pos={[0,2,2]} />
                            <Box/>
                        </group>
                            
                    </Canvas> 

                    <Canvas>
                        <group position={[0,0.3,0]}>
                            <Light clr={"gold"} pos={[0,2,2]} />
                            <Box/>
                        </group>
                            
                    </Canvas> 
                    <Canvas>
                        <group position={[0,0.3,0]}>
                            <Light clr={"magenta"} pos={[0,2,2]} />
                            <Box/>
                        </group>
                    </Canvas> 

                    <div className={a.details}>
                        <Package 
                            title={"SILVER PACKAGE"}
                            services = {["1 supported device", "Unlimited movies", "Ad-free TV shows", "Watch in HD"]}
                            clr={"silver"}
                        />  
                        <Package 
                            title={"GOLD PACKAGE"}
                            services = {["2 supported devices", "Unlimited movies", "Ad-free TV shows", "Watch in Full HD"]}
                            clr={"gold"}
                        /> 
                        <Package 
                            title={"DIAMOND PACKAGE"}
                            services = {["4 supported devices", "Unlimited movies", "Ad-free TV shows", "Watch in Ultra HD"]}
                            clr={"magenta"}
                        /> 
                    </div> 
                </div>
                
        </div>
    </>
     );
}
 
export default Spotlight;