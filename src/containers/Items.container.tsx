import React, { useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter, RouteComponentProps } from "react-router";

import { items as itemsActions } from "../actions";
import { Item, State } from "../types";
import ItemsPreview from "../components/Items.component";

interface ItemsProps extends RouteComponentProps<any> {
  itemsRequestAction: (
    query: string,
    type: string,
    pageNum: number,
    limit: number
  ) => void;
  isFetching: boolean;
  items: Array<Item>;
  itemType: string;
  match: any;
}

const Items: React.FC<ItemsProps> = ({
  itemsRequestAction,
  isFetching,
  items,
  itemType,
  match
}) => {
  useEffect(() => {
    const query = match.params && match.params.query ? match.params.query : "";
    itemsRequestAction(query, itemType, 1, 5);
  }, [match.params, itemType, itemsRequestAction]);

  if (isFetching) {
    return <CircularProgress />;
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <ItemsPreview items={items}> </ItemsPreview>
    </Grid>
  );
};

export default connect(
  (state: State, { itemType }: { itemType: string }) => ({
    isFetching: state.itemsByType[itemType].isFetching,
    items: state.itemsByType[itemType].items
  }),
  { itemsRequestAction: itemsActions.request }
)(withRouter(Items));
