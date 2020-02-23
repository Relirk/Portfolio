import React from "react";

import NavTabs from "./NavTabs";

export default function TabsComponent({ sites, clones, work, separate }) {
  return (
    <NavTabs sites={sites} clones={clones} work={work} separate={separate} />
  );
}
