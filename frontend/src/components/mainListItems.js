import React, { useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Code as CodeIcon,
  StarBorder as StarBorderIcon
} from "@material-ui/icons";

export default function MainListItems() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={event => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={event => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <StarBorderIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </div>
  );
}
