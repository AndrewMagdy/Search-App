import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { Item } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    block: {
      display: "block"
    }
  })
);

interface ItemsPreviewProps {
  items: Item[];
}

const ItemsPreview: React.FC<ItemsPreviewProps> = ({ items }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {items.map(item => (
        <ListItem key={item.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={item.headerText} src={item.image} />
          </ListItemAvatar>
          <ListItemText
            primary={item.headerText}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.block}
                  color="textPrimary"
                >
                  {item.primaryText}
                </Typography>

                <Typography
                  component="span"
                  variant="body2"
                  className={classes.block}
                  color="textPrimary"
                >
                  {item.secondaryText}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ItemsPreview;
