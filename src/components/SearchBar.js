import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Results from "./Results";

const useStyles = makeStyles({
  wrapper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: 2,
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

export default function SearchBar({ onClick, onQuery, placeholder }) {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await onQuery(query)

      if(data) {
        setResults(data);
      } else if(query === ''){
        setResults([]);
      }
    }
    fetchMovies();
  }, [query, onQuery]);


  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root}>
        <SearchIcon className={classes.iconButton} aria-label="search" />
        <InputBase
          onChange={e => setQuery(e.target.value)}
          className={classes.input}
          placeholder={placeholder}
          inputProps={{ "aria-label": placeholder }}
        />
      </Paper>
      <Results results={results} onClick={onClick}/>
    </div>
  );
}
