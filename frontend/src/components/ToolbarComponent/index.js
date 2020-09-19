import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Avatar,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@material-ui/icons';

import MainListItems from '../mainListItems';
import SecondaryListItems from '../secondaryListItems';

import MaterialUiStyles from './styles';
const useStyles = MaterialUiStyles;

const profileImg =
  'https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/profile.png?alt=media&token=10ead545-56fd-43f2-8c2b-69121539af40';

export default function ToolbarComponent() {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    function setStartOpen() {
      if (window.innerWidth <= 760) {
        setOpen(false);
      }
    }

    function verifyRoutePath() {
      console.log();
      switch (location.pathname) {
        case '/about':
          setPageName('About me');
          break;
        case '/work':
          setPageName('Projects and studies');
          break;
        default:
          break;
      }
    }

    setStartOpen();
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
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.header}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src={profileImg}
          />
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Francisco
          </Typography>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon color="secondary" />
            </IconButton>
          </div>
        </div>

        <Divider />
        <MainListItems />
        <Divider />
        <SecondaryListItems />
      </Drawer>
    </>
  );
}
