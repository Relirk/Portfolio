import { makeStyles } from "@material-ui/core/styles/index";

const MaterialUiStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.dracula,
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  subtitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.primary.contrastText,
  },
}));

export default MaterialUiStyles;
