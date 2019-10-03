import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
  sortQuery: string;
  pageNum: number;
}

const Items: React.FC<ItemsProps> = ({
  itemsRequestAction,
  isFetching,
  items,
  itemType,
  match,
  sortQuery,
  pageNum
}) => {
  const [query, setQuery] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    let newQuery = match.params && match.params.query ? match.params.query : "";
    newQuery += sortQuery;
    setQuery(newQuery);
  }, [match.params, sortQuery]);

  useEffect(() => {
    itemsRequestAction(query, itemType, pageNum, itemsPerPage);
  }, [query, itemType, itemsRequestAction]);

  const getNextPage = () => {
    itemsRequestAction(query, itemType, pageNum + 1, itemsPerPage);
  };

  if (isFetching) {
    return <CircularProgress />;
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <ItemsPreview items={items}> </ItemsPreview>
      <Button onClick={getNextPage} variant="contained" color="primary">
        Next Page
      </Button>
    </Grid>
  );
};

export default connect(
  (state: State, { itemType }: { itemType: string }) => ({
    isFetching: state.itemsByType[itemType].isFetching,
    items: state.itemsByType[itemType].items,
    pageNum: state.itemsByType[itemType].pageNum
  }),
  { itemsRequestAction: itemsActions.request }
)(withRouter(Items));
