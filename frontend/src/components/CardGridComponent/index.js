import React, { useState, useEffect } from 'react';
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MaterialUiStyles from './styles';
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
    setChecked(prev => !prev);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={4}>
        {projects.map((item, index) => (
          <Zoom
            key={index}
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
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
                  <Typography
                    className={classes.cardTitle}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {item.title}
                  </Typography>
                  <Typography className={classes.cardDescription}>
                    {item.description}
                  </Typography>
                </CardContent>
                {item.rights && (
                  <Accordion className={classes.rights}>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className={classes.rightsIcon} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.rightsHeading}>
                        Proprietários do projeto
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.rightsDetails}>
                      {item.rights.map((right, index) => (
                        <Typography
                          id={right.cnpj}
                          key={right.cnpj}
                          className={classes.rightsItem}
                        >
                          <Link
                            className={classes.rightsLink}
                            href={right.url}
                            target="_blank"
                          >
                            {right.name}
                          </Link>
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )}
                <CardActions>
                  {item.url && (
                    <Button
                      size="small"
                      href={item.url}
                      target="_blank"
                      style={{ color: '#ffffff' }}
                    >
                      Visualizar
                    </Button>
                  )}
                  {item.github && (
                    <Button
                      size="small"
                      href={item.github}
                      target="_blank"
                      style={{ color: '#ffffff' }}
                    >
                      Github
                    </Button>
                  )}
                  {item.googlePlay && (
                    <Button
                      size="small"
                      href={item.googlePlay}
                      target="_blank"
                      style={{ color: '#3dd382' }}
                    >
                      Google Play
                    </Button>
                  )}
                  {item.appStore && (
                    <Button
                      size="small"
                      href={item.appStore}
                      target="_blank"
                      style={{ color: '#1a75eb' }}
                    >
                      App Store
                    </Button>
                  )}

                  {!item.url &&
                    !item.github &&
                    !item.googlePlay &&
                    !item.appStore && (
                      <div className={classes.noLinkContainer}>
                        <Typography className={classes.noLink}>
                          Link de acesso indisponível
                        </Typography>
                      </div>
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
