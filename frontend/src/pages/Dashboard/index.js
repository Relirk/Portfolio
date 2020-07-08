import React from "react";
import MaterialUiStyles from "./styles";
import ToolbarComponent from "../../components/ToolbarComponent";

const useStyles = MaterialUiStyles;

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToolbarComponent />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
      </main>
    </div>
  );
}
