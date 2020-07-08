import { makeStyles } from "@material-ui/core/styles/index";

const MaterialUiStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.dracula,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export default MaterialUiStyles;
