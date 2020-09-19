import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Assignment as AssignmentIcon,
  ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';

export default function SecondaryListItems() {
  const history = useHistory();

  const handleClick = route => {
    history.push(`/${route}`);
  };

  return (
    <div>
      <ListItem
        button
        onClick={() => {
          handleClick('');
        }}
      >
        <ListItemIcon>
          <ArrowBackIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Back" />
      </ListItem>
    </div>
  );
}
