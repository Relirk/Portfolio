import React, { useEffect, useState } from "react";
import api from "../../services/api";
import MaterialUiStyles from "./styles";
import ToolbarComponent from "../../components/ToolbarComponent";
import CardGridComponent from "../../components/CardGridComponent";
import TabsComponent from "../../components/TabsComponent";

const useStyles = MaterialUiStyles;

export default function Home() {
  const classes = useStyles();
  const [gridWork, setGridWork] = useState([]);
  const [gridFrontend, setGridFrontend] = useState([]);
  const [gridBackend, setGridBackend] = useState([]);
  const [gridMobile, setGridMobile] = useState([]);

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

      const { work, frontend, backend, mobile } = object;
      console.log(object);
      setGridWork(<CardGridComponent projects={work} />);
      setGridFrontend(<CardGridComponent projects={frontend} />);
      setGridBackend(<CardGridComponent projects={backend} />);
      setGridMobile(<CardGridComponent projects={mobile} />);
    }

    initialLoad();
  }, []);

  return (
    <div className={classes.root}>
      <ToolbarComponent />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <TabsComponent
          work={gridWork}
          frontend={gridFrontend}
          backend={gridBackend}
          mobile={gridMobile}
        />
      </main>
    </div>
  );
}
