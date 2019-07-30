import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Results from "./Results";
import useStyles from "./SearchBar.styles";

const  SearchBar= ({ onClick, onQuery, placeholder }) => {
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
          value={query}
          className={classes.input}
          placeholder={placeholder}
          inputProps={{ "aria-label": placeholder }}
        />
      </Paper>
      <Results className={classes.results} results={results} onClick={onClick} close={() => setQuery('')}/>
    </div>
  );
}

export default SearchBar;
