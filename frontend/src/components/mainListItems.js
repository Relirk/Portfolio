import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Code as CodeIcon,
  StarBorder as StarBorderIcon,
} from '@material-ui/icons';

export default function MainListItems() {
  const history = useHistory();

  const handleListItemClick = (event, index, route) => {
    history.push(`/${route}`);
  };

  return (
    <div>
      <ListItem
        button
        onClick={event => handleListItemClick(event, 1, 'about')}
      >
        <ListItemIcon>
          <StarBorderIcon style={{ color: '#f1fa8c' }} />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>

      <ListItem button onClick={event => handleListItemClick(event, 0, 'work')}>
        <ListItemIcon>
          <CodeIcon style={{ color: '#50fa7b' }} />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </div>
  );
}
