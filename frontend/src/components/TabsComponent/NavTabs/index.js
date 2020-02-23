import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs } from "@material-ui/core";

import TabPanel from "../TabPanel";
import LinkTab from "../LinkTab";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function NavTabs({ sites, clones, work, separate }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      "aria-controls": `nav-tabpanel-${index}`
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
          <LinkTab label="Clones" href="/clones" {...a11yProps(0)} />
          <LinkTab label="Clientes" href="/work" {...a11yProps(1)} />
          <LinkTab label="Estudo" href="/sites" {...a11yProps(2)} />
          <LinkTab label="Genéricos" href="/separate" {...a11yProps(3)} />
          {/* <LinkTab label="Apps" href="/apps" {...a11yProps(1)} /> */}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        {clones}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {work}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {sites}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {separate}
      </TabPanel>
      {/* <TabPanel value={value} index={1}></TabPanel> */}
    </div>
  );
}
