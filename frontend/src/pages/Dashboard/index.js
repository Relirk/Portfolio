import React from 'react';

import ToolbarComponent from '../../components/ToolbarComponent';

import SocialRow from './components/SocialRow';
import MaterialUiStyles from './styles';

const useStyles = MaterialUiStyles;

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToolbarComponent />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div Style="height: 45%; width: 100%;background-image: linear-gradient(-90deg, #A48EF2, #573FBF);"></div>
        <SocialRow />
        teste teste
      </main>
    </div>
  );
}
