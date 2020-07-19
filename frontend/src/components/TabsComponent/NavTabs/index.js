import React, { useState } from "react";
import { AppBar, Tabs, Slide } from "@material-ui/core";
import TabPanel from "../TabPanel";
import LinkTab from "../LinkTab";

import MaterialUiStyles from "./styles";
const useStyles = MaterialUiStyles;

export default function NavTabs({ work, frontend, backend, mobile }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      "aria-controls": `nav-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Clientes" href="/work" {...a11yProps(0)} />
          <LinkTab label="Front-end" href="/frontend" {...a11yProps(1)} />
          <LinkTab label="Back-end" href="/backend" {...a11yProps(2)} />
          <LinkTab label="Mobile" href="/mobile" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>
              Alguns projetos de clientes em produção
            </h1>
            <p className={classes.subtitle}>
              Atualização dos projetos gradativa por questão de tempo e
              permissão dos proprietários.
            </p>
          </div>
        </Slide>
        {work}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>Projetos Front-end</h1>
            <p className={classes.subtitle}>
              Trabalhos, desafios e estudos com foco no estudo e implementação
              de ferramentas web e design.
            </p>
          </div>
        </Slide>
        {frontend}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>Projetos Back-end</h1>
            <p className={classes.subtitle}>
              Trabalhos, desafios e estudos com foco no estudo e implementação
              de ferramentas de infraestrutura, frameworks, cloud e mais.
            </p>
          </div>
        </Slide>
        {backend}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>
              Alguns projetos de clientes em produção
            </h1>
            <p className={classes.subtitle}>
              klasdk;lda;lkdsskl;ak;ldakl;sdkakjldasjkds
            </p>
          </div>
        </Slide>
        {mobile}
      </TabPanel>
    </div>
  );
}
