import React from "react";
import { useHistory } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Assignment as AssignmentIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";

export default function SecondaryListItems() {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(`/${route}`);
  };

  return (
    <div>
      {/* <ListSubheader inset>Social</ListSubheader> */}
      <ListItem
        button
        onClick={() => {
          handleClick("about");
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Github" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          handleClick("");
        }}
      >
        <ListItemIcon>
          <ArrowBackIcon />
        </ListItemIcon>
        <ListItemText primary="Voltar para o início" />
      </ListItem>
    </div>
  );
}
