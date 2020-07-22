import { makeStyles } from "@material-ui/core/styles/index";

const MaterialUiStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  profileGrid: {
    backgroundColor: "#353746",
    position: "relative",
    display: "flex",
  },
  paper: {
    width: "100%",
    margin: theme.spacing(8, 4),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
  },
  question: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.contrastText,
  },
  description: {
    fontSize: 18,
    color: theme.palette.secondary.contrastText,
    textAlign: "center",
    zIndex: 1,
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    width: "50%",
    margin: theme.spacing(5, 0, 2),
    zIndex: 1,
  },
}));

export default MaterialUiStyles;
