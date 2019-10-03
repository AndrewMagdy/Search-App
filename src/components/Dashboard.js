import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Plot from "react-plotly.js";
import { connect } from "react-redux";

import { feedback as feedbackActions } from "../actions";

const Dashboard = ({ feedbackRequestAction, count }) => {
  const [state, setState] = useState({ values: [], labels: [] });

  useEffect(() => {
    feedbackRequestAction();
  }, [feedbackRequestAction]);

  useEffect(() => {
    setState({ values: Object.values(count), labels: Object.keys(count) });
  }, [count]);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ minHeight: "90vh" }}
    >
      <Plot
        data={[
          {
            values: state.values,
            labels: state.labels,
            type: "pie"
          }
        ]}
        layout={{ title: "Feedback" }}
      />
    </Grid>
  );
};

export default connect(
  state => ({
    count: state.feedback.count
  }),
  { feedbackRequestAction: feedbackActions.request }
)(Dashboard);
