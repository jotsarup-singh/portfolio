import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  particlesCanvas: {
    position:"absolute",
    opacity: "0.6",
    zIndex:"2",
    top:"0"
  }
}));

export const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "black",
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 0,
              sync: true,
            }
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.6,
              sync: false,
            }
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 5
            }
          }
        }
      }
    }
    />
  );
};
