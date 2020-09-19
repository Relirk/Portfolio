import React, { useState } from 'react';
import { AppBar, Tabs, Slide } from '@material-ui/core';
import TabPanel from '../TabPanel';
import LinkTab from '../LinkTab';

import MaterialUiStyles from './styles';
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
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <LinkTab label="Featured" href="/work" {...a11yProps(0)} />
          <LinkTab label="Web" href="/frontend" {...a11yProps(1)} />
          <LinkTab label="Backend" href="/backend" {...a11yProps(2)} />
          <LinkTab label="Mobile" href="/mobile" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>My favorite projects</h1>
          </div>
        </Slide>
        {work}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>Web projects</h1>
          </div>
        </Slide>
        {frontend}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>Backend projects</h1>
          </div>
        </Slide>
        {backend}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h1 className={classes.title}>Mobile projects</h1>
          </div>
        </Slide>
        {mobile}
      </TabPanel>
    </div>
  );
}
