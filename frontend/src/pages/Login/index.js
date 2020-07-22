import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Zoom,
} from "@material-ui/core";
import Wave from "../../components/Wave";
import MaterialUiStyles from "./styles";
const useStyles = MaterialUiStyles;

const profileImg =
  "https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/profile.png?alt=media&token=10ead545-56fd-43f2-8c2b-69121539af40";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(true);

  const handleSubmit = () => {
    setChecked((prev) => !prev);
    history.push("/about");
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "700ms" : "0ms" }}
        >
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Zoom>
        <Zoom in={checked}>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            className={classes.profileGrid}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar} src={profileImg}></Avatar>
              <Typography className={classes.title} component="h1" variant="h5">
                Olá! Eu sou o Francisco{" "}
              </Typography>

              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Typography className={classes.question} component="p">
                  Procurando soluções e novas idéias para seu projeto?
                </Typography>

                <Typography className={classes.description} component="p">
                  Pois bem, meu objetivo é entender o seu negócio, criar
                  soluções criativas e de alta qualidade que ajudem a consolidar
                  o sucesso da sua empresa ou mesmo fazer a sua idéia sair do
                  papel.
                </Typography>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Quero saber mais
                </Button>
              </form>
            </div>
            <Wave></Wave>
            {/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
              window.navigator.userAgent
            ) && (
              <div
                Style="    height: 7em;
              width: 100%;
              position: absolute;
              bottom: 0;
              background-color: #282a36;"
              >
                teste
              </div>
            )}
          </Grid>
        </Zoom>
      </Grid>
    </>
  );
}
