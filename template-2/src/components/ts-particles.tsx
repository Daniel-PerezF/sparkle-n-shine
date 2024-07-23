import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function TsParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.8,
          },
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 150, // Reduced distance for a less harsh effect
            duration: 2, // Increased duration for smoother effect
            speed: 0.5, // Reduced speed for gentler effect
            factor: 5, // Lower factor for less aggressive repulse
          },
        },
      },
      particles: {
        collisions: {
          enable: true,
          mode: "bounce",
        },
        color: {
          value: "#16C7F3",
        },
        links: {
          color: "#27262b",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 25,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 30, max: 60 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const MemoizedParticles = useMemo(() => {
    if (init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      );
    }
    return null;
  }, [init, options]);

  return <>{MemoizedParticles}</>;
}
