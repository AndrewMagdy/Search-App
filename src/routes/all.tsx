import React from "react";
import { Grid } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Items from "../containers/Items.container";

const Routes: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="People" />
        <Tab label="Files" />
        <Tab label="Apps" />
      </Tabs>

      {(value === 0 || value === 1) && <Items itemType="people" />}
      {(value === 0 || value === 2) && <Items itemType="files" />}
      {(value === 0 || value === 3) && <Items itemType="apps" />}
    </Grid>
  );
};

export default Routes;
