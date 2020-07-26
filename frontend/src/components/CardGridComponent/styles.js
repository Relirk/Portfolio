import { makeStyles } from "@material-ui/core/styles/index";

const MaterialUiStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#44475a",
    color: "#f8f8f2",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  rights: {
    marginTop: "10px",
    backgroundColor: "#282a36",
    padding: "2px",
    color: "white",
  },
  rightsIcon: {
    color: theme.palette.background.secondary,
  },
  rightsHeading: {
    color: "white",
  },
  rightsDetails: {
    display: "flex",
    flexDirection: "column",
  },
  rightsItem: {
    marginBottom: "10px",
    fontSize: "14px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  rightsLink: {
    color: "white",
    cursor: "pointer",
    margin: "5px",
  },
  noLinkContainer: {
    width: "100%",
    textAlign: "center",
    margin: "3px",
  },
  noLink: {
    color: "red",
  },
}));

export default MaterialUiStyles;
