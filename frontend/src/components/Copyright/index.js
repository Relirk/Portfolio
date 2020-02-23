import React from "react";
import { Link, Typography } from "@material-ui/core";

import MaterialUiStyles from "./styles";
const useStyles = MaterialUiStyles;

export default function Copyright() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://franciscoolvera.com/">
          Francisco Olvera - Portifoil
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
