import { makeStyles } from '@material-ui/core/styles/index';

const MaterialUiStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: theme.palette.text.clear,
  },
}));

export default MaterialUiStyles;
