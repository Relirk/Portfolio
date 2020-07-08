import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Code as CodeIcon,
  StarBorder as StarBorderIcon,
} from "@material-ui/icons";

export default function MainListItems() {
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index, route) => {
    history.push(`/${route}`);
    setSelectedIndex(index);
  };

  return (
    <div>
      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1, "about")}
      >
        <ListItemIcon>
          <StarBorderIcon />
        </ListItemIcon>
        <ListItemText primary="Conheça" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0, "work")}
      >
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Projetos" />
      </ListItem>
    </div>
  );
}
