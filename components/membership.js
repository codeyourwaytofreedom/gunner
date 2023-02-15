import { OrbitControls, RoundedBox, SpotLight } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import a from "../styles/a.module.css";
import Light from "./light.js";
import Box from "./box.js";

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
                       <div className={a.details_membership}>
                            <div className={a.details_membership_title}>
                                SILVER PACKAGE
                            </div>
                            <div className={a.details_membership_line}>
                                <span className={a.details_membership_line_box}>&#10003;</span>
                            </div>
                            <div>Two</div>
                       </div>
                       <div className={a.details_membership}>
                            <div className={a.details_membership_title}>
                                GOLD PACKAGE
                            </div>
                       </div>
                       <div className={a.details_membership}>
                            <div className={a.details_membership_title}>
                                DIAMOND PACKAGE
                            </div>
                       </div>
                    </div> 
                </div>
                
        </div>
    </>
     );
}
 
export default Spotlight;