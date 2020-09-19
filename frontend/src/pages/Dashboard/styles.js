import { makeStyles } from '@material-ui/core/styles/index';

const MaterialUiStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto',
    backgroundColor: theme.palette.background.dark,
  },
  card: {
    margin: '0 20px 20px 20px',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export default MaterialUiStyles;
