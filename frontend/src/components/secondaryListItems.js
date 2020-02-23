import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import {
  Code as CodeIcon,
  StarBorder as StarBorderIcon,
  Assignment as AssignmentIcon
  // Dashboard as DashboardIcon,
  // ShoppingCart as ShoppingCartIcon,
  // People as PeopleIcon,
  // BarChart as BarChartIcon,
  // Layers as LayersIcon
} from "@material-ui/icons";

export function SecondaryListItems() {
  return (
    <div>
      <ListSubheader inset>Social</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="LinkedIn" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Instagram" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Github" />
      </ListItem>
    </div>
  );
}
