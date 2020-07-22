import { makeStyles } from "@material-ui/core/styles/index";

const MaterialUiStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "160px",
  },
  wave1: { animation: `$moveWave1 3s ease-in-out infinite alternate` },
  "@keyframes moveWave1": {
    from: {
      transform: "translateX(-2000px)",
    },
  },
  wave2: { animation: `$moveWave2 3s 1.2s ease-in-out infinite alternate` },
  "@keyframes moveWave2": {
    from: {
      transform: "translateX(-1800px)",
    },
  },
  wave3: { animation: `$moveWave3 3s 0.7s ease-in-out infinite alternate` },
  "@keyframes moveWave3": {
    from: {
      transform: "translateX(-1600px)",
    },
  },
}));

export default MaterialUiStyles;
