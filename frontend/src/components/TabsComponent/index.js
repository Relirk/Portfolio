import React from "react";

import NavTabs from "./NavTabs";

export default function TabsComponent({ work, frontend, backend, mobile }) {
  return (
    <NavTabs
      work={work}
      frontend={frontend}
      backend={backend}
      mobile={mobile}
    />
  );
}
