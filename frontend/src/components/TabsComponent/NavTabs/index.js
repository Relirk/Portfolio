import React, { useState } from "react";
import { AppBar, Tabs } from "@material-ui/core";
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
          <LinkTab label="Trabalhos" href="/work" {...a11yProps(0)} />
          <LinkTab label="Front-end" href="/frontend" {...a11yProps(1)} />
          <LinkTab label="Back-end" href="/backend" {...a11yProps(2)} />
          <LinkTab label="Mobile" href="/mobile" {...a11yProps(3)} />
          {/* <LinkTab label="Apps" href="/apps" {...a11yProps(1)} /> */}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        {work}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {frontend}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {backend}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {mobile}
      </TabPanel>
      {/* <TabPanel value={value} index={1}></TabPanel> */}
    </div>
  );
}
