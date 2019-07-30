import React, { useState, useEffect, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Results from "./Results";
import useStyles from "./SearchBar.styles";

const  SearchBar= ({ onClick, onQuery, placeholder }) => {
  const node = useRef();
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

  const handleClickOut = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    return setQuery('');
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => document.removeEventListener("mousedown", handleClickOut);
  }, []);

  return (
    <div className={classes.wrapper} ref={node}>
      <Paper className={classes.root}>
        <SearchIcon className={classes.iconButton} />
        <InputBase
          onChange={e => setQuery(e.target.value)}
          value={query}
          className={classes.input}
          placeholder={placeholder}
        />
      </Paper>
      <Results className={classes.results} results={results} onClick={onClick} close={() => setQuery('')}/>
    </div>
  );
}

export default SearchBar;
