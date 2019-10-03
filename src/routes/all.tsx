import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Checkbox from "@material-ui/core/Checkbox";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";

import Items from "../containers/Items.container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    tabs: {
      marginTop: "8vh"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

interface AllProps {
  tabIndex: number;
}
const All: React.FC<AllProps> = ({ tabIndex }) => {
  const classes = useStyles();
  const [value, setValue] = useState(tabIndex);
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    ascending: true
  });

  useEffect(() => {
    let newQuery = "";
    if (state.ascending) {
      newQuery += "&_sort=name&_order=asc";
    } else {
      newQuery += "&_sort=name&_order=desc";
    }

    setQuery(newQuery);
  }, [state]);

  const handleChangeTabs = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeCheckbox = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Grid>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.ascending}
                onChange={handleChangeCheckbox("ascending")}
                value="ascending"
              />
            }
            label="Sort Name Ascendingly"
          />
        </List>
        <Divider />
      </Drawer>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChangeTabs}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="People" />
        <Tab label="Files" />
        <Tab label="Apps" />
      </Tabs>

      {(value === 0 || value === 1) && (
        <Items itemType="people" sortQuery={query} />
      )}
      {(value === 0 || value === 2) && (
        <Items itemType="files" sortQuery={query} />
      )}
      {(value === 0 || value === 3) && (
        <Items itemType="apps" sortQuery={query} />
      )}
    </Grid>
  );
};

export default All;
