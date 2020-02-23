import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";

import api from "../../services/api";
import MaterialUiStyles from "./styles";
import Copyright from "../../components/Copyright";
import ToolbarComponent from "../../components/ToolbarComponent";
import CardGridComponent from "../../components/CardGridComponent";
import TabsComponent from "../../components/TabsComponent";

const useStyles = MaterialUiStyles;

export default function Home() {
  const classes = useStyles();
  const [gridSites, setGridSites] = useState("");
  const [gridClones, setGridClones] = useState("");
  const [gridWork, setGridWork] = useState("");
  const [gridSeparate, setGridSeparate] = useState("");

  useEffect(() => {
    async function initialLoad() {
      const response = await api.get("projects");
      let object = {};
      for (const key in response.data) {
        let array = [];
        for (const key2 in response.data[key]) {
          array.push(response.data[key][key2]);
        }
        object[key] = array;
      }

      const { sites, clones, work, separate } = object;
      setGridSites(<CardGridComponent projects={sites} />);
      setGridClones(<CardGridComponent projects={clones} />);
      setGridWork(<CardGridComponent projects={work} />);
      setGridSeparate(<CardGridComponent projects={separate} />);
    }

    initialLoad();
  }, []);

  return (
    <div className={classes.root}>
      <ToolbarComponent />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <TabsComponent
          sites={gridSites}
          clones={gridClones}
          work={gridWork}
          separate={gridSeparate}
        />
        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}
