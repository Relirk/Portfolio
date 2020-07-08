import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Zoom,
  Container,
} from "@material-ui/core";

import MaterialUiStyles from "./styles";
const useStyles = MaterialUiStyles;

export default function CardGridComponent({ projects }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [interval, setInterval] = useState(0);

  useEffect(() => {
    function initialLoad() {
      let timeout = 500;
      let timeoutTimeline = [];
      for (let index = 0; index < projects.length; index++) {
        timeoutTimeline.push(timeout);
        timeout += 500;
      }
      setInterval(timeoutTimeline);

      handleChange();
    }
    initialLoad();
  }, [projects.length]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={4}>
        {projects.map((item, index) => (
          <Zoom
            key={index}
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: interval[index] } : {})}
          >
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={item.image}
                  title="Image title"
                />

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </CardContent>

                <CardActions>
                  {item.url && (
                    <Button
                      size="small"
                      color="secondary"
                      href={item.url}
                      target="_blank"
                    >
                      Visualizar
                    </Button>
                  )}
                  {item.github && (
                    <Button
                      size="small"
                      color="secondary"
                      href={item.github}
                      target="_blank"
                    >
                      Github
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          </Zoom>
        ))}
      </Grid>
    </Container>
  );
}
