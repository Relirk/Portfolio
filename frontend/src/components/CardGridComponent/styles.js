import { makeStyles } from '@material-ui/core/styles/index';

const MaterialUiStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.medium,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardTitle: {
    color: theme.palette.text.clear,
  },
  cardDescription: {
    color: theme.palette.text.medium,
  },
  rights: {
    marginTop: 10,
    backgroundColor: theme.palette.background.dark,
    padding: 2,
    color: theme.palette.text.medium,
  },
  rightsIcon: {
    color: theme.palette.text.clear,
  },
  rightsHeading: {
    color: theme.palette.text.medium,
  },
  rightsDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightsItem: {
    marginBottom: 10,
    fontSize: 14,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  rightsLink: {
    color: theme.palette.text.clear,
    cursor: 'pointer',
    margin: 5,
  },
  noLinkContainer: {
    width: '100%',
    textAlign: 'center',
    margin: 3,
  },
  noLink: {
    color: '#fa4003',
  },
}));

export default MaterialUiStyles;
