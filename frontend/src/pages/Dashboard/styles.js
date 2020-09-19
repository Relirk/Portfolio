import { makeStyles } from '@material-ui/core/styles/index';

const MaterialUiStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  about: {
    paddingTop: '20px',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.sixth,
  },
  card: {
    margin: '0 20px 20px 20px',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export default MaterialUiStyles;
