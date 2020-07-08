import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Badge,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
} from "@material-ui/icons";

import MainListItems from "../mainListItems";
import SecondaryListItems from "../secondaryListItems";

import MaterialUiStyles from "./styles";
const useStyles = MaterialUiStyles;

export default function ToolbarComponent() {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    async function verifyRoutePath() {
      console.log();
      switch (location.pathname) {
        case "/about":
          setPageName("Conheça");
          break;
        case "/work":
          setPageName("Projetos");
          break;
        default:
          break;
      }
    }

    verifyRoutePath();
  }, [location]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {pageName}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <MainListItems />
        <Divider />
        <SecondaryListItems />
      </Drawer>
    </>
  );
}
