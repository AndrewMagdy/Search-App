import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBox from "./common/SearchBox";

const Home: React.FC = () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    style={{ minHeight: "90vh" }}
  >
    <SearchBox />
  </Grid>
);

export default Home;
