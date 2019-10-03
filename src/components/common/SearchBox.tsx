import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  })
);

interface SearchBoxProps {
  history: any;
}

const SearchBox: React.FC<SearchBoxProps> = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    history.replace(`/all/${value}`);
  };

  const handleKeyPress = (ev: React.KeyboardEvent<{}>) => {
    if (ev.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default withRouter(SearchBox);
