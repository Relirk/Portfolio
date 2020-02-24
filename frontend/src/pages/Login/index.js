import React from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  Link,
  Paper,
  Box,
  Grid,
  Typography
} from "@material-ui/core";

import MaterialUiStyles from "./styles";
import Copyright from "../../components/Copyright";

const useStyles = MaterialUiStyles;
const profileImg =
  "https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/profile.png?alt=media&token=10ead545-56fd-43f2-8c2b-69121539af40";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/home");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={profileImg}></Avatar>
          <Typography className={classes.title} component="h1" variant="h5">
            OI, SOU O FRANCISCO{" "}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Typography className={classes.description} component="p">
              Procurando soluções e novas idéias para seu projeto? Pois bem, meu
              objetivo é entender o seu negócio e criar soluções criativas de
              alta qualidade que ajudem a consolidar o sucesso da sua empresa.
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

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
