import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Result from "./Result";

const useStyles = makeStyles({
  root: {
    padding: 10,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    width: 400,
    flexDirection: "column"
  },
  input: {
    padding: 10,
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

const mockResults = [
  {
    Title: "hellow"
  },
  {
    Title: "d"
  }
];

const Results = ({ results = [], onClick }) => {
  const classes = useStyles();
  return (
    results.length > 0 && (
      <Paper className={classes.root}>
        <Container maxWidth="sm">
          {results.map(result => (
            <Result onClick={onClick} result={result} />
          ))}
        </Container>
      </Paper>
    )
  );
};

export default Results;
