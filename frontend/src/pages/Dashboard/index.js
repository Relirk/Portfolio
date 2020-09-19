import React from 'react';
import MaterialUiStyles from './styles';
import ToolbarComponent from '../../components/ToolbarComponent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import SocialRow from './components/SocialRow';

const useStyles = MaterialUiStyles;

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToolbarComponent />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={classes.about}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Francisco Olvera
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Olá! Tudo bem? Aqui vou deixar algumas redes sociais e
                  informações de contato caso queira entrar em contato comigo ou
                  conhecer um pouco mais sobre minha pessoa e trabalho
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Grid
            container
            spacing={1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid container item xs={11} spacing={3}>
              <SocialRow />
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}
