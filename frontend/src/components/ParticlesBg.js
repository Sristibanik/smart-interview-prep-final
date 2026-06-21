import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0f0c29" },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
}