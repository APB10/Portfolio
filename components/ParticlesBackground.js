import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particle-config";

export default function ParticleBackground() {
    
    return(
        <Particles className="postion: fixed z-[-1]"  params= { particlesConfig }></Particles>
    );
}